const { Error, Success, createToken, smsService, QRCodeGenerate, uploadToBucket, Payment } = require("../constants/utils");
const UserModel = require("../models/user-model");
const OrganizationModel = require("../models/organization-model");
const AppointmentModel = require("../models/appointment-model");
const { randomOtp } = require("../constants/utils");
const ObjectId = require("mongoose").Types.ObjectId;
const { specialization } = require("../seeds/specialization-seed");
const noticeModel = require("../models/notice-model");
const { CITIES } = require("../seeds/citiesData");
const settingModel = require("../models/setting-model");
const TransactionModel = require("../models/transaction-model");
const specializationModel = require("../models/specialization-model");
const { eventEmitter } = require("../events");
const serviceModel = require("../models/service-model");

const sessionInfo = async (request, user) => {
  try {
    if (!user) return Success({ message: "" });

    let info = await UserModel.findOne({ _id: user._id }).populate("organizationId").populate('hospitalId');
    info = JSON.parse(JSON.stringify(info))

    if ( ["DP", "CL", "HL"].includes(info.userType) &&  !info?.organizationId?.qrCode ) {
      let link = "https://doctortime.in";
      if (info.userType === "HL")
        link += `/hospital/${info.organizationId._id}`;
      else if (info.userType === "CL")
        link += `/clinic-detail/${info.organizationId._id}`;
      else if (info.userType === "DP")
        link += `/department/${info.organizationId._id}`;

      // genrate qr code
      const filename = `${info.organizationId._id}.png`;
      await QRCodeGenerate(link, filename);
      await OrganizationModel.updateOne(
        { _id: info.organizationId._id },
        { qrCode: filename }
      );
      info.organizationId.qrCode = filename;
    } 

    if( ["DP", "CL", "HL"].includes(info.userType) ){
      info.organizationId.billing.hasExpire  =  new Date(info.organizationId?.billing?.expire) < new Date() 
    }

    return Success({ user: info });
  } catch (error) {
    console.log(error);
  }
};

const createClinic = async (body, userInfo) => {
  try {
    let organization = await UserModel.findOne({ phone: body.phone }).lean();
    if (!organization) {
      organization = await OrganizationModel({
        registration: body?.registration,
        organizationType: body?.source === "Hospital" ? "Department" : "Clinic",
        tab: {
          step: body?.tab,
          isComplete: true,
        },
        name: body?.name,
        email: body?.email,
        phone: body?.phone,
        createdBy: userInfo?._id,
      }).save();

      let user = await UserModel({
        phone: body?.phone,
        organizationId: organization._id,
        primary: true,
        isActive: true,
        userType: body?.source === "Hospital" ? "DP" : "CL",
        createdBy: userInfo?._id,
        twoFactor: {
          isVerified: true,
          otp: 0,
        },
      }).save();

      let returnObj = {
        _id: organization._id,
        userId: user._id,
        tab: organization.tab,
      };

      return Success({
        message: "Successfully created",
        organization: returnObj,
      });
    } else {
      return Error({ message: "Already created" });
    }
  } catch (error) {
    console.log(error);
    return Error();
  }
};

const createHospital = async (body, userInfo) => {
  try {
    let organization = await UserModel.findOne({ phone: body.phone }).lean();

    if (!organization) {
      organization = await OrganizationModel({
        registration: body?.registration,
        organizationType: "Hospital",
        tab: {
          step: body?.tab,
          isComplete: true,
        },
        name: body?.name,
        email: body?.email,
        createdBy: userInfo?._id,
      }).save();

      let user = await UserModel({
        phone: body?.phone,
        organizationId: organization._id,
        primary: true,
        userType: "HL",
        isActive: true,
        createdBy: userInfo?._id,
        twoFactor: {
          isVerified: true,
          otp: 0,
        },
      }).save();

      let returnObj = {
        _id: organization._id,
        userId: user._id,
        tab: organization.tab,
      };

      return Success({
        message: "Successfully created",
        organization: returnObj,
      });
    } else if (body.isLogin) {
      await OrganizationModel.updateOne(
        { _id: organization.organizationId },
        {
          registrationNo: body?.registrationNo,
          email: body?.email,
          name: body?.name,
          phone: body.phone
        }
      );
      await UserModel.updateOne({ _id: organization._id }, { isActive: true });

      organization = await UserModel.findOne({
        _id: organization._id,
      }).populate("organizationId");
      return Error({
        message: "Already created",
        isActive: true,
        organization,
      });
    } else {
      return Error({ message: "Already created" });
    }
  } catch (error) {
    console.log(error);
    return Error();
  }
};

const logIn = async (body) => {
  try {
    // let user = await UserModel.findOne({ email: body.email })

    // if(!user) return Error({message: 'User not found'})

    // let isValid = await comparePassword(body.password, user.password)
    // if(!isValid) return Error({message: 'Invalid Password'})

    // let token = createToken(user._id)
    return Success({ message: "Successfull", token, user });
  } catch (error) {
    console.log(error);
    return Error();
  }
};

const appointmentDepartments = async (body, user) => {
  try {
    let departments = await UserModel.aggregate([
      {
        $match: {
          primary: true,
          $or: [
            {
              hospitalId: user.organizationId,
              userType: "DP",
            },
            {
              organizationId: user?.organizationId,
              userType: "CL",
            },
          ],
        },
      },
      {
        $lookup: {
          from: "organizations",
          localField: "organizationId",
          foreignField: "_id",
          as: "clinic",
          pipeline: [
            {
              $project: {
                name: "$name",
              },
            },
          ],
        },
      },
      {
        $project: {
          name: 1,
          clinic: { $first: "$clinic.name" },
          specialization: "$specialization",
          phone: 1,
          organizationId: 1,
        },
      },
    ]);
    return Success({ message: "Successfull fetch doctor", departments });
  } catch (error) {
    console.log(error);
    return Error();
  }
};

const getPatientByNumber = async (body, user) => {
  try {
    if (user.userType !== "DR") return Error({ message: "You are not access" });
    let patient = await UserModel.find(
      { phone: body.phone, userType: "PT" },
      { name: 1, phone: 1, gender: 1, bloodGroup: 1, address: 1 }
    );
    return Success({ patient });
  } catch (error) {
    console.log(error);
  }
};

const getUserByEmail = async (body) => {
  try {
    let user = await UserModel.findOne(
      { email: body.email },
      { firstName: 1, lastName: 1, email: 1 }
    );
    return Success({ user });
  } catch (error) {
    console.log(error);
  }
};

const organizationDetails = async (body, user, file) => {
  try {
    let detail = JSON.parse(JSON.stringify(body));
    if (detail) detail = JSON.parse(detail.data);

    if (detail?.specialization?.length)
      detail.specialization = detail?.specialization?.map((s) => ({
        name: s.name,
        id: s.id,
      }));

    if (file) await uploadToBucket(file.filename);

    await OrganizationModel.updateOne(
      { _id: detail._id },
      {
        fee: detail?.fee,
        specialization: detail?.specialization,
        tab: { step: detail?.tab, isComplete: true },
        address: detail?.address,
        photo: file?.filename,
        services: detail?.services,
        timing: detail?.timing,
      }
    );

    return Success({ message: "Details saved successfully" });
  } catch (error) {
    console.log(error);
  }
};

const signUp = async (body, user) => {
  try {
    const otp = randomOtp();

    let user = await UserModel.findOne({
      phone: body?.phone,
      $or: [
        { primary: true },
        { userType: { $in: ["SA", "MR", "PT"] }, primary: false },
      ],
    });
    if (user) {
      await UserModel.updateOne(
        { phone: body?.phone },
        { "twoFactor.otp": otp }
      );
    } else {
      user = await UserModel({
        phone: body.phone,
        twoFactor: { otp },
        primary: true,
      }).save();
    }

    console.log("----------> OTP ", otp);

    let response = { message: "otp Sent" };
    if (process.env.ENVIRONMENT !== "development") {
      response = await smsService(`your otp is ${otp} `, body.phone);
      if (!response?.message)
        return Error({ message: `Network Connection Refuse`, user });
      if (response?.status_code === 411)
        return Error({ message: `${response?.message} - ${otp}`, user });
    }

    return Success({ message: `${response?.message} - ${otp}`, user });
  } catch (error) {
    console.log(error);
  }
};

const validateOtp = async (body) => {
  try {
    let user = await UserModel.findOne({ _id: body?.userId }).populate(
      "organizationId"
    );
    if (user?.twoFactor?.otp === body?.otp) {
      await UserModel.updateOne({ _id: user._id }, { "twoFactor.otp": 0 });
      let token = createToken(user._id);
      return Success({
        user,
        message: "Your mobile number is verified.",
        token,
      });
    } else {
      return Error({ message: "Invalid OTP!" });
    }
  } catch (error) {
    console.log(error);
  }
};

const allSpecializations = async (body) => {
  try {
    let specializations = await specializationModel.find({});
    return Success({ specializations });
  } catch (error) {
    console.log(error);
  }
};
const oneSpecialization = async (body) => {
  try {
    let specializations = specialization.data.find((spe) => spe.id === body.id);
    return Success({ specializations });
  } catch (error) {
    console.log(error);
  }
};
const allCities = async (body) => Success({ cities: CITIES });

const getAllClinics = async (body) => {
  try {
    
    let users = ["Clinic"];
    if (!JSON.parse(body?.isClinic || true)) users.push("Department");
    
    let specialization = body?.filter?.specialization

    let specializationCond =  typeof(specialization) === 'string' ? [specialization] : specialization 
    let clinics = await OrganizationModel.aggregate([
      {
        $match: {
        'billing.isPaid': true,
          organizationType: { $in: users },
          ...(specialization
            ? {
              $or: [
                { "specialization.name": { $in: specializationCond } },
                { "specialization.id": { $in: specializationCond } }
              ]
            }
            : {}),
        }
      },
      {
        $lookup: {
          from: 'users',
          let: { organizationId: '$_id' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$organizationId', '$$organizationId']
                },
                userType: 'DR'
              }
            },
            {
              $project: {
                name: 1,
                experience: 1
              }
            },
            {
              $limit: 1
            }
          ],
          as: 'doctor'
        }
      },
      {
        $unwind: {
          path: '$doctor',
          preserveNullAndEmptyArrays: true
        },

      }
    ])


    return Success({ clinics });0
  } catch (error) {
    console.log(error);
  }
};

const clinicDetails = async (body) => {
  try {
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let detail = await OrganizationModel.aggregate([
      {
        $match: {
          _id: ObjectId(body?._id),
        },
      },
      {
        $lookup: {
          from: "appointments",
          let: { department: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$departmentId", "$$department"],
                },
                createdAt: { $gte: today },
                status: "waiting",
                isPaid: true
              },
            },
          ],
          as: "appointment",
        },
      },
      {
        $project: {
          name: 1,
          phone: 1,
          photo: 1,
          email: 1,
          specialization: 1,
          token: { $first: "$appointment.token" },
          address: 1,
          fee: 1,
          services: 1,
          timing: 1,
          organizationType: 1,
          room: 1
        },
      },
    ]);
    detail = JSON.parse(JSON.stringify(detail[0]));
    let doctor = await UserModel.findOne({ organizationId: body._id, userType: 'DR'}, { name: 1 })
    detail['doctor'] = doctor

    let hospital = await UserModel.findOne({ organizationId: body._id, userType: 'DP' }, { hospitalId: 1 })
    let name = await OrganizationModel.findOne({ _id: hospital?.hospitalId }, { name: 1, services: 1  })
    detail['hospital'] = name
    
    return Success({ detail });
  } catch (error) {
    console.log(error);
  }
};

const getOrganization = async (body) => {
  try {
    let organization = await OrganizationModel.findOne({ _id: body?.RID });

    return Success({ organization });
  } catch (error) {
    console.log(error);
  }
};

const waitingList = async (body, user) => {
  try {
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let appointment = await AppointmentModel.aggregate([
      {
        $match: {
          departmentId: ObjectId(body.id),
          isPaid: true,
          createdAt: {
            $gte: today,
          },
          status: "waiting",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" },
      {
        $project: {
          token: 1,
          name: "$user.name",
          phone: "$user.phone",
          address: "$user.address",
        },
      },
      {
        $sort: {
          token: 1,
        },
      },
    ]);

    return Success({ appointment });
  } catch (error) {
    console.log(error);
  }
};

const setUserType = async (body) => {
  try {

    let userTypes = {
      hospital: "HL",
      clinic: "CL",
      patient: "PT",
    };

    let userType = null;
    let organization = null;

    if (["hospital", "clinic"].includes(body.type)) {
      userType = userTypes[body.type];
    
      if (!body?.organizationId) {
        organization = await OrganizationModel({
          organizationType: body.type === "hospital" ? "Hospital" : "Clinic",
        }).save();
      }

    } else userType = "PT";

    let user = await UserModel.findOneAndUpdate(
      { _id: body?.userId },
      {
        userType,
        "twoFactor.isVerified": true,
        organizationId: organization?._id,
      }
    );
    user = JSON.parse(JSON.stringify(user));
    user.userType = userType;

    return Success({ user });
  } catch (error) {
    console.log(error);
  }
};

const getAllHospitals = async (body, user) => {
  try {
    let organization = await OrganizationModel.find(
      {
        organizationType: "Hospital",
        'billing.isPaid': true,
        // 'billing.expire': { $lte: new Date },
        ...(body?.filter
          ? {$or: [{ "specialization.name": body?.filter?.specialization }, { "specialization.id": body?.filter?.specialization }]}
          : {}),
      });

    return Success({ organization });
  } catch (error) {
    console.log(error);
  }
};

const hospitalDetails = async (body) => {
  try {
        let details = await OrganizationModel.findOne({ _id: body.id });
        let user = await UserModel.findOne(
          { organizationId: body.id },
          { phone: 1 }
        );
        details["phone"] = user?.phone;

        let departments = await UserModel.find(
          { hospitalId: body.id },
          { organizationId: 1 }
        ).populate("organizationId", "name room specialization photo");

        departments = JSON.parse(JSON.stringify(departments));
        
        for (let department of departments) {
          let doctor = await UserModel.findOne(
            { organizationId: department.organizationId, userType: "DR" },
            { name: 1, doctorPhoto: "$photo" }
          );
          department.organizationId["doctor"] = doctor;
        }

        return Success({ details, departments });
      } catch (error) {
    console.log(error);
  }
};


const patientAppointments = async (body, user) => {
  try {
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let appointments = await AppointmentModel.find({
      $or: [{userId: ObjectId(user._id)}, { createdBy: ObjectId(user?._id)}],
      ...(body?.isToday ? { createdAt: { $gte: today } } : {}),
    })
      .populate("departmentId", "name address")
      .populate("userId");

    return Success({ appointments });
  } catch (error) {
    console.log(error);
  }
};

const search = async (body, user) => {
  try {
    let aggregateQuery = [
      {
        $match: {
          organizationType: {
            $in: ["Hospital", "Clinic"],
          },
          'billing.isPaid': true, 
          $and: [
            body?.fee > 0 ? { fee: { $lte: body?.fee } } : {},
            body?.city
              ? { address: { $regex: body?.city, $options: "i" } }
              : {},
            body?.specialization
              ? { "specialization.name": body?.specialization }
              : {},
            body?.type ? { organizationType: body?.type } : {},
          ],
        },
      },
      {
        $project: {
          organizationType: 1,
          photo: 1,
          name: 1,
          email: 1,
          address: 1,
        },
      },
    ];

    if (body?.search)
      aggregateQuery.push({
        $match: {
          name: {
            $regex: body.search,
            $options: "i",
          },
        },
      });

    let searchData = await OrganizationModel.aggregate(aggregateQuery);
    let doctors = await UserModel.aggregate([
      {
        $match: {
          userType: "DR",
          $and: [
            body?.search
              ? { name: { $regex: body.search, $options: "i" } }
              : {},
            body?.city
              ? { address: { $regex: body?.city, $options: "i" } }
              : {},
            body?.specialization
              ? { "specialization.name": body?.specialization }
              : {},
          ],
        },
      },
      {
        $lookup: {
          from: "organizations",
          localField: "organizationId",
          foreignField: "_id",
          as: "organization",
          pipeline: [
            {
              $project: {
                organizationType: 1,
                fee: 1,
                billing: 1
              },
            },
          ],
        },
      },
      {
        $unwind: "$organization",
      },
      {
        $match: {
          'organization.billing.isPaid': true
        }
      },
      {
        $project: {
          name: 1,
          email: 1,
          address: 1,
          photo: 1,
          userType: 1,
          organizationId: 1,
          organizationType: "$organization.organizationType",
          fee: "$organization.fee",
        },
      },
      {
        $match: {
          ...(body?.fee > 0 ? { fee: { $lte: body?.fee } } : {}),
        },
      },
    ]);
    return Success({ searchData: [...searchData, ...doctors] });
  } catch (error) {
    console.log(error);
  }
};

const uploadFile = async (file) => {
  try {
    let pathname = await uploadToBucket(file.filename);

    return Success({ pathname });
  } catch (error) {
    console.log(error);
  }
};

const createNotice = async (body, user) => {
  try {
    let notice = await noticeModel({
      organizationId: user.organizationId,
      ...body,
      createdBy: user._id,
    }).save();
    return Success({ notice, message: "Successfully created" });
  } catch (error) {
    console.log(error);
  }
};

const getNotice = async (body) => {
  try {
    let notices = await noticeModel.find({ organizationId: body.id });
    return Success({ notices });
  } catch (error) {
    console.log(error);
  }
};

const deleteNotice = async (body) => {
  try {
    await noticeModel.deleteOne({ _id: body.id });
    return Success({ message: "Successfully deleted" });
  } catch (error) {
    console.log(error);
  }
};

const websiteSetting = async (params) => {
  try {
    let contact = await settingModel.findOne({ id: params.id });
    return Success({ contact });
  } catch (error) {
    console.log(error);
  }
};


const phonepayStatus = async ( body, res ) => {
  try {
    console.log('payment response', body)

    let redirectUrl = process.env.REDIRECT_URL

    let transaction = await TransactionModel.findOne({ refrenceId: body?.providerReferenceId })
    if( !transaction ){
      transaction = await TransactionModel({
        status: body?.code,
        merchantId: body?.merchantId,
        transactionId: body.transactionId,
        amount: body.amount / 100,
        refrenceId: body?.providerReferenceId
      }).save()

      if (body.code === 'PAYMENT_SUCCESS') {
        redirectUrl = process.env.REDIRECT_SUCCESS_URL

        body.transactionId = body.transactionId.split('-')[0]
  
        /**************************** For Appointment *************************** */  
        let appointment = await AppointmentModel.findOne({ _id: body.transactionId }).populate('departmentId')
        if (appointment) {
  
          let today = new Date();
          today.setHours(0, 0, 0, 0);
          
          let lastAppointment = await AppointmentModel.findOne({
            departmentId: ObjectId(appointment.departmentId._id),
            isPaid: true,
            createdAt: { $gte: today },
          }, { token: 1 }).sort({ createdAt: -1 });
  
          let token = lastAppointment?.token ? +lastAppointment.token + 1 : "1";
          await AppointmentModel.updateOne({ _id: appointment._id }, { isPaid: true,  token })

          let patient = await UserModel.findOne({ _id: appointment.userId })


          
          if ( appointment.departmentId?.organizationType === 'Clinic' ) redirectUrl = `${ process.env.REDIRECT_URL }/clinic-detail/${ appointment.departmentId._id }`
          else redirectUrl = `${ process.env.REDIRECT_URL }/department-detail/${ appointment.departmentId._id }`
          
          eventEmitter.emit("new-appointment", {
            event: "new-appointment",
            data: {
              _id: appointment._id,
              departmentId: appointment.departmentId._id,
              token,
              user: {
                _id: patient._id,
                name: patient.name,
                phone: patient.phone,
                address: patient?.address,
              }
            }
          })

        }
        /************************************************************* */

        /************************* Organization Billing ************************* */
        let organization = await OrganizationModel.findOne({ _id: body.transactionId })
        if( organization ){

          let Days = 0
          let date = new Date()
          if( organization.billing.plan === 'month' ) Days = 30
          else if( organization.billing.plan === 'quater' ) Days = 90
          else if( organization.billing.plan === 'halfYear' ) Days = 180
          else if( organization.billing.plan === 'year' ) Days = 365

          date.setDate(date.getDate() + Days)

          await OrganizationModel.updateOne({ _id: body.transactionId },  {
              "billing.isPaid": true,
              "billing.expire": date,
              "billing.isNewPlan": false,
          })

          if( organization.organizationType === "Hospital" ){
            let departments = await UserModel.find({ hospitalId: organization._id }, { organizationId: 1 })
            await OrganizationModel.updateMany({ _id: { $in: departments.map( department => ObjectId(department.organizationId))}}, {billing: { isPaid: true,  expire: date,  isNewPlan: false }})
          }

          await TransactionModel.updateOne({ _id: transaction._id }, { type: organization.billing.plan })
          redirectUrl = `${process.env.REDIRECT_SUCCESS_URL}?trxId=${transaction._id}`
        }
        /************************************************************************ */

        res.redirect(redirectUrl)
        
      } else {
        
        res.redirect(redirectUrl)
      }

    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error)
  }
};

const payment = async ( body, user ) => {
  try {
    console.log(body)
    let amount = 0

    if( body.type === 'appointment' ){
      let patientPrice = await settingModel.findOne({ id: 'PAYMENT', 'data.organization': 'patient' }, { data: 1 })
      amount = patientPrice.data.get('price')

    } else if( [ 'CL', 'HL' ].includes(user.userType) ){
      let plan = await settingModel.findOne({ id: 'PAYMENT', 'data.organization': user.userType === 'CL' ? 'clinic' : 'hospital', 'data.type': body.plan }, { data: 1 })
      amount = +plan.data.get('price') - +plan.data.get('discount')

      await OrganizationModel.updateOne({ _id: user.organizationId }, { 'billing.plan': body.plan })
    }

    let redirectUrl = null
    if( amount ){
      let payment =  new Payment( body._id, user._id, amount ) 
      let { data: paymentData } = await payment.create_payment()
  
      if( paymentData?.success ) redirectUrl =  paymentData.data.instrumentResponse.redirectInfo.url 
    }
      
    return Success({ redirectUrl });
  } catch (error) {
    console.log(error);
  }
};


const getTransaction = async ({ id }, user) => {
  try {
    let transaction = await TransactionModel.findOne({ _id: id }, { amount: 1, type: 1 });
    return Success({ transaction });
  } catch (error) {
    console.log(error);
  }
};

const getServices = async ( body , user) => {
  try {
    let services = await serviceModel.find({});
    return Success({ services });
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  logIn,
  signUp,
  sessionInfo,
  createClinic,
  appointmentDepartments,
  getPatientByNumber,
  getUserByEmail,
  organizationDetails,
  validateOtp,
  allSpecializations,
  getAllClinics,
  clinicDetails,
  getOrganization,
  waitingList,
  createHospital,
  setUserType,
  getAllHospitals,
  hospitalDetails,
  patientAppointments,
  search,
  oneSpecialization,
  uploadFile,
  getNotice,
  createNotice,
  deleteNotice,
  websiteSetting,
  allCities,
  phonepayStatus,
  payment,
  getTransaction,
  getServices,
};
