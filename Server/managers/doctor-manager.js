const AppointmentModel = require("../models/appointment-model");
const SettingModel = require("../models/setting-model");
const { Success, Error, uploadToBucket, Payment } = require("../constants/utils");
const UserModel = require("../models/user-model");
const ObjectId = require("mongoose").Types.ObjectId;
const { EventEmitter } = require("events");
const OrganizationModel = require("../models/organization-model");
const DealModel = require("../models/deal-model");
const { createChecksum } = require('../constants/utils')
const eventEmitter = new EventEmitter();

const getAppointments = async (body, user) => {
  try {
    let status = body.status;
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let departmentIds = [ObjectId(user.organizationId)];
    if (user.userType === "HL") {
      departmentIds = await UserModel.find(
        { hospitalId: user.organizationId, primary: true },
        { organizationId: 1 }
      );
      departmentIds = departmentIds.map((d) => ObjectId(d.organizationId));
    }

    let query = { createdAt: { $gte: today } };

    if (status) query["status"] = status;

    if (user.userType === "PT") query["createdBy"] = user._id;
    else query["departmentId"] = { $in: departmentIds };

    let appointments = await AppointmentModel.aggregate([
      {
        $match: query,
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
          pipeline: [
            {
              $project: {
                name: 1,
                gender: 1,
                bloodGroup: 1,
                phone: 1,
              },
            },
          ],
        },
      },
      {
        $unwind: "$user",
      },
      {
        $lookup: {
          from: "organizations",
          localField: "departmentId",
          foreignField: "_id",
          as: "department",
          pipeline: [
            {
              $project: {
                name: 1,
              },
            },
          ],
        },
      },
      {
        $unwind: "$department",
      },
      {
        $project: {
          token: 1,
          doctorId: 1,
          user: "$user",
          status: 1,
          department: "$department.name",
        },
      },
    ]);
    return Success({ message: "Appointment fetch successfully", appointments });
  } catch (error) {
    console.log(error);
    return Error();
  }
};

const editDoctor = async (body, user, file) => {
  try {
    body = JSON.parse(body?.data);

    if (
      body._id !== user._id &&
      user.userType !== "SA" &&
      body?.createdBy?.toString() !== user._id?.toString()
    )
      return Error({ message: "You have not permission to edit." });

    let userObj = {
      name: body?.name,
      email: body?.email,
      phone: body?.phone,
      qualification: body?.qualification,
      specialization: body?.specialization?.id,
      experience: body?.experience,
      address: body?.address,
      aboutme: body?.aboutme,
      photo: body?.photo,
    };

    
    if (file){
      await uploadToBucket( file.filename );
      userObj["photo"] = file?.filename;
    }

    await UserModel.updateOne({ _id: ObjectId(body._id) }, userObj);

    userObj["_id"] = body?._id;

    return Success({ message: "Doctor update  Successfully", doctor: userObj });
  } catch (error) {
    console.error(error);
  }
};

const getAllDoctors = async (body, user) => {
  try {
    let query = {};

    if (user?.userType === "MR") query["createdBy"] = user?._id;

    else if (["CL", "DP"].includes(user?.userType)) {
      query["organizationId"] = user.organizationId;

    } else if( user?.userType === 'HL' ){
      let departmentIds = await UserModel.find(
        { hospitalId: user.organizationId, primary: true },
        { organizationId: 1 }
      );

      departmentIds = departmentIds.map((d) => ObjectId(d.organizationId));
      query['organizationId'] = { $in: departmentIds }

    } else if( user && user.userType !== 'SA' ) {
      query['createdBy'] = user._id
    }

    let doctors = await UserModel.aggregate([
      {
        $match: {
          userType: "DR",
          isActive: true,
          primary: false,
          ...query,
          ...(body?.filter?.specialization ? { 'specialization.name': body?.filter?.specialization } : {} )
        },
      },
      {
        $lookup: {
          from: "organizations",
          localField: "organizationId",
          foreignField: "_id",
          pipeline: [
            {
              $project: {
                name: "$name",
              },
            },
          ],
          as: "clinic",
        },
      },
      {
        $project: {
          name: 1,
          clinic: { $first: "$clinic.name" },
          specialization: 1,
          phone: 1,
          photo: 1,
          organizationId: 1,
          isActive: 1,
          email: 1,
          address: 1,
          experience: 1,
          qualification: 1,
        },
      },
    ]);

    return Success({ doctors });
  } catch (error) {
    console.log(error);
    return Error();
  }
};

const deleteDoctor = async (body, user) => {
  try {
    let doctor = await UserModel.findOne({ _id: body._id });
    if (
      user.userType === "SA" ||
      doctor.createdBy.toString() === user._id.toString()
    ) {
      await UserModel.deleteOne({ _id: body._id });
      return Success({ message: "Successfull delete doctor" });
    }
  } catch (error) {
    console.log(error);
    return Error();
  }
};

const addAppointment = async (body, user ) => {
  try {
    let token
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if( user.userType !== 'PT' ){
      let lastAppointment = await AppointmentModel.findOne({ 
          departmentId: ObjectId(body.department.organizationId),
          createdAt: { $gte: today },
        }, { token: 1 } ).sort({ createdAt: -1 });
  
      token = lastAppointment?.token ? ++lastAppointment.token : "1";
    }

    let patient = await UserModel.findOne({ phone: body.phone, userType: "PT" }, { name: 1, userType: 1, phone: 1, address: 1 });

    if (!patient)  patient = await UserModel({ ...body, userType: "PT", primary: true }).save();
    else if( body?.isAnother ) patient = await UserModel({ ...body, userType: "PT", primary: false }).save();
    
    let appointment = await AppointmentModel.findOne({
      userId: patient._id,
      departmentId: body.department.organizationId,
      status: "waiting",
      createdAt: { $gte: today },
    });

    if (!appointment) {
      appointment = await AppointmentModel({
        token,
        userId: patient._id,
        departmentId: body.department.organizationId,
        createdBy: user._id,
        created: user._id,
      }).save();
    } else { return Error({ message: "Already in your waiting list." }) }

    let Obj = {
      _id: appointment._id,
      departmentId: appointment.departmentId,
      token,
      user: {
        _id: patient._id,
        name: patient.name,
        phone: patient.phone,
        address: patient?.address,
      },
    };


    if( user.userType === 'PT' ) {
      let redirectUrl = null
      let patientPrice = await SettingModel.findOne({ id: 'PAYMENT', 'data.organization': 'patient' }, { data: 1 })

      let payment =  new Payment(appointment._id, appointment.userId, patientPrice.data.get('price') ) 
      let { data: paymentData } = await payment.create_payment()

      if( paymentData?.success ) redirectUrl =  paymentData.data.instrumentResponse.redirectInfo.url 
      
      return Success({ message: "Appointment successfully created", appointment: null, redirectUrl })
    } else {
      eventEmitter.emit("new-appointment", { event: "new-appointment", data: Obj })
      return Success({ message: "Appointment successfully created", appointment: Obj })
    }

  } catch (error) {
    console.log(error);
    return Error();
  }
};

const appointmentById = async (body, user) => {
  try {
    let appointment = await AppointmentModel.findOne({
      _id: ObjectId(body.appointmentId),
    })
      .populate(
        "userId",
        "name age gender fatherName phone address bloodGroup gardianName"
      )
      .populate("departmentId", "name");

    if (!appointment) return Error({ messsage: "Oops! appointment not find." });
    return Success({ appointment });
  } catch (error) {
    console.log(error);
    return Error();
  }
};

const reAppointment = async (body) => {
  try {
    let appointment = await AppointmentModel.findOneAndUpdate(
      { _id: ObjectId(body?._id) },
      { status: "waiting" }
    ).populate("userId", "name address phone");

    let Obj = {
      user: appointment.userId,
      token: appointment.token,
      _id: appointment._id,
    };

    eventEmitter.emit("re-appointment", { event: "re-appointment", data: Obj });

    return Success({ ...body, message: "Re-appointment successfully" });
  } catch (error) {
    console.log(error);
  }
};

const analytics = async (body, user) => {
  try {
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let departmentIds = [ObjectId(user.organizationId)];
    if (user.userType === "HL") {
      departmentIds = await UserModel.find(
        { hospitalId: user.organizationId, primary: true },
        { organizationId: 1 }
      );
      departmentIds = departmentIds.map((d) => ObjectId(d.organizationId));
    }

    let analytics = await AppointmentModel.aggregate([
      {
        $match: {
          departmentId: {
            $in: departmentIds,
          },
        },
      },
      {
        $facet: {
          total: [
            {
              $count: "count",
            },
          ],
          today: [
            {
              $match: { createdAt: { $gte: today } },
            },
            {
              $count: "count",
            },
          ],
          currentToken: [
            {
              $match: { status: "waiting", createdAt: { $gte: today } },
            },
            {
              $limit: 1,
            },
          ],
        },
      },
      {
        $project: {
          total: { $first: "$total.count" },
          today: { $first: "$today.count" },
          token: { $first: "$currentToken.token" },
          department: `${departmentIds?.length}`,
        },
      },
    ]);
    return Success({ analytics: analytics[0] });
  } catch (error) {
    console.log(error);
  }
};

const doghnutAnalytics = async (body, user) => {
  try {
    let departmentIds = [ObjectId(user.organizationId)];
    if (user.userType === "HL") {
      departmentIds = await UserModel.find(
        { hospitalId: user.organizationId, primary: true },
        { organizationId: 1 }
      );
      departmentIds = departmentIds.map((d) => ObjectId(d.organizationId));
    }

    let analytics = await AppointmentModel.aggregate([
      {
        $match: {
          departmentId: {
            $in: departmentIds,
          },
        },
      },
      {
        $facet: {
          gender: [
            {
              $lookup: {
                from: "users",
                localField: "userId",
                foreignField: "_id",
                as: "user",
                pipeline: [
                  {
                    $project: {
                      gender: 1,
                    },
                  },
                ],
              },
            },
            {
              $unwind: {
                path: "$user",
                preserveNullAndEmptyArrays: true,
              },
            },
            {
              $project: {
                user: 1,
              },
            },
            {
              $group: {
                _id: "$user.gender",
                count: {
                  $sum: 1,
                },
              },
            },
          ],
          status: [
            {
              $group: {
                _id: "$status",
                count: {
                  $sum: 1,
                },
              },
            },
          ],
        },
      },
    ]);

    return Success({ analytic: analytics[0] });
  } catch (error) {
    console.log(error);
  }
};

const createDoctor = async (body, user, image) => {
  try {
    body = JSON.parse(body?.data);
    let doctor = await UserModel.findOne({
      phone: body?.phone,
      primary: false,
    });
    if (doctor) {
      if (doctor?.organizationId === body?.organizationId)
        return Error({
          message: "Already added in your clinic/hospitals.",
          doctor,
        });
      else
        return Error({
          message: "This phone already used try another phone.",
          doctor,
        });
    } else {
      await uploadToBucket( image.filename )
      doctor = await UserModel({
        userType: "DR",
        name: body?.name,
        email: body?.email,
        phone: body?.phone,
        qualification: body?.qualification,
        experience: body?.experience,
        address: body?.address,
        aboutme: body?.aboutme,
        organizationId: body?.organizationId,
        specialization: body?.specialization,
        createdBy: user._id,
        photo: image?.filename,
        isActive: true,
      }).save();
      await OrganizationModel.updateOne(
        { _id: body?.organizationId },
        { tab: { step: body?.tab, isComplete: true } }
      );
      return Success({ message: "Doctor successfully created.", doctor });
    }
  } catch (error) {
    console.error(error);
  }
};

const doctorsInOrganization = async (body) => {
  try {
    let doctors = await UserModel.find(
      { organizationId: body?.organizationId, primary: false },
      {
        name: 1,
        email: 1,
        phone: 1,
        qualification: 1,
        specialization: 1,
        experience: 1,
        address: 1,
        aboutme: 1,
        photo: 1,
        createdBy: 1,
      }
    );
    return Success({ doctors });
  } catch (error) {
    console.log(error);
  }
};

const deal = async (body, user) => {
  try {
    let deal = await DealModel.findOne({
      organizationId: body?.organizationId,
    });
    if (!deal) {
      deal = await DealModel({
        price: body?.price,
        detail: body?.details,
        organizationId: body?.organizationId,
        createdBy: user._id,
      }).save();
    }
    await OrganizationModel.updateOne(
      { _id: body?.organizationId },
      { tab: { step: body?.tab, isComplete: true } }
    );
    await UserModel.updateOne(
      { organizationId: body?.organizationId, primary: true },
      { twoFactor: { isVerified: true } }
    );
    return Success({ message: "Successfull saved", deal });
  } catch (error) {
    console.log(error);
  }
};

const setAppointmentStatus = async (body) => {
  try {
    await AppointmentModel.updateOne(
      { _id: ObjectId(body?._id) },
      { status: body.status === "reached" ? "complete" : "unreached" }
    );

    eventEmitter.emit("status", {
      event: "status",
      data: { appointmentId: body._id },
    });

    return Success({ ...body, message: "Status update successfully" });
  } catch (error) {
    console.log(error);
  }
};

const createDepartment = async (body, userInfo, file ) => {
  try {
    body = JSON.parse(body?.data);
    let organization = await UserModel.findOne({ phone: body.phone }).lean();
    if (!organization) {
      await uploadToBucket( file.filename )

      organization = await OrganizationModel({
        registration: body?.registration,
        organizationType: "Department",
        tab: {
          step: body?.tab,
          isComplete: true,
        },
        name: body?.name,
        email: body?.email,
        timing: body?.timing,
        room: body?.room,
        specialization: body?.specialization,
        photo: file.filename
      }).save();

      let user = await UserModel({
        phone: body?.phone,
        organizationId: organization._id,
        hospitalId: body.organizationId,
        primary: true,
        userType: "DP",
        isActive: true,
        twoFactor: {
          isVerified: true,
        },
      }).save();

      let returnObj = {
        _id: organization._id,
        userId: user._id,
        tab: organization.tab,
        ...organization,
      };

      return Success({
        message: "Department Successfully created",
        department: returnObj,
      });
    } else {
      return Error({
        message: "This phone already used. ",
      });
    }
  } catch (error) {
    console.log(error);
    return Error();
  }
};

const getDepartments = async (body, user) => {
  try {
    let query = { hospitalId: user.userType === 'HL' ? user.organizationId :  body?.organizationId, userType: 'DP' }

    if( user.userType === 'SA' ) query = { userType: 'DP' }

    let organizations = await UserModel.find(query).populate('organizationId')
    return Success({ organizations });
  } catch (error) {
    console.log(error);
  }
};


const getClinics = async (body, user) => {
  try {
    let query = { hospitalId: body?.organizationId };

    if (user?.userType === "HL") {
      query = { hospitalId: user?.organizationId, userType: "DP" };
    } else if( user.userType === 'SA' ){
      query = { userType: body?.source ? 'CL' : 'DP' }
    } else if (!["MR"].includes(user?.userType)){
      query = { organizationId: body?.organizationId };
    } 

    let departments = await UserModel.find(query)
      .populate("organizationId", "photo name room specialization")
      .populate("hospitalId", "name email fee organizationType");
    return Success({ departments });
  } catch (error) {
    console.log(error);
  }
};

const deleteDepartment = async (body, user) => {
  try {
    await OrganizationModel.deleteOne({ _id: body?._id });
    await UserModel.deleteMany({ organizationId: body?._id });

    return Success({ message: "Department deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

const patients = async (body, user) => {
  try {
    let departmentIds = [ObjectId(user.organizationId)];
    if (user.userType === "HL") {
      departmentIds = await UserModel.find(
        { hospitalId: user.organizationId, primary: true },
        { organizationId: 1 }
      );
      departmentIds = departmentIds.map((d) => ObjectId(d.organizationId));
    }

    let patients = await AppointmentModel.aggregate([
      {
        $match: {
          departmentId: {
            $in: departmentIds,
          },
        },
      },
      {
        $group: {
          _id: "$userId",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" },
      {
        $project: {
          name: "$user.name",
          age: "$user.age",
          phone: "$user.phone",
          gender: "$user.gender",
          address: "$user.address",
        },
      },
    ]);
    return Success({ patients });
  } catch (error) {
    console.log(error);
  }
};

const hospitalSpecialization = async (body, user) => {
  try {
    let organization = await OrganizationModel.findOne(
      { _id: body?.organizationId || user.organizationId },
      { specialization: 1 }
    );
    let specialization = organization?.specialization?.length
      ? organization?.specialization.map((spe) => ({
          name: spe.name,
          id: spe.name.toLocaleUpperCase(),
        }))
      : [];
    return Success({ specialization });
  } catch (error) {
    console.log(error);
  }
};

const addSpecialization = async (body, user) => {
  try {

    let updatedSpecializations = []

    if (body.specializations?.length) {
      for (let specialization of body.specializations) {

        let organization = await OrganizationModel.findOne({
          _id: user?.organizationId,
          "specialization.id": specialization.value.toUpperCase(),
        });

        if (!organization) {
          await OrganizationModel.updateOne(
            { _id: user?.organizationId },
            {
              $push: {
                specialization: { id: specialization.value?.toUpperCase(), name: specialization.label },
              },
            }
          );
          updatedSpecializations.push({ name: specialization.label, id: specialization.value?.toUpperCase() })
        }
      }
    }
    return Success({ message: 'Specialization created succesfully.', specializations: updatedSpecializations });

  } catch (error) {
    console.log(error);
  }
};

const anonymousAppointment = async (body, user) => {
  try {
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let lastAppointment = await AppointmentModel.findOne({departmentId: ObjectId(user.organizationId), createdAt: { $gte: today }}, { token: 1 } )
    .sort({ createdAt: -1 });

    let token = lastAppointment?.token ? Number(lastAppointment.token) + 1 : 1;

    let patient = await UserModel.findOne({ name: 'Anonymous', userType: "PT" },{ _id: 1 });

    if ( !patient ) {
      patient = await UserModel({
        name: 'Anonymous',
        email: 'anonymous@mail.com',
        userType: "PT",
        phone: '0000000000',
        primary: false,
      }).save();
    }

    let appointment = await AppointmentModel({
      token,
      userId: patient._id,
      departmentId: user.organizationId,
      createdBy: user._id,
    }).save();


    let data = {
      _id: appointment._id,
      departmentId: appointment.departmentId,
      token,
      user: {
        _id: patient._id,
        name: patient.name,
        phone: patient.phone,
        address: patient?.address,
      },
    };

    eventEmitter.emit("new-appointment", { data } );

    return Success({ message: "Appointment addedd successfully" });
  } catch (error) {
    console.log(error);
  }
};


const EventHandler = (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*"
  });

  const sendResponse = (data, event) => {
    res.write(`event: ${event}\n`);
    res.write(`data: ${JSON.stringify(data)}`);
    res.write("\n\n");
  };

  eventEmitter.on("new-appointment", (data) =>
    sendResponse(data, "new-appointment")
  );

  eventEmitter.on("re-appointment", (data) =>
    sendResponse(data, "re-appointment")
  );

  eventEmitter.on("status", (data) => sendResponse(data, "status"));
};

module.exports = {
  getAppointments,
  editDoctor,
  getAllDoctors,
  deleteDoctor,
  addAppointment,
  appointmentById,
  reAppointment,
  analytics,
  doghnutAnalytics,
  createDoctor,
  doctorsInOrganization,
  deal,
  setAppointmentStatus,
  createDepartment,
  getDepartments,
  deleteDepartment,
  patients,
  hospitalSpecialization,
  addSpecialization,
  getClinics,
  anonymousAppointment,
  EventHandler,
};
