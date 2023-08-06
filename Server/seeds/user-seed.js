const UserModel = require('../models/user-model');
const AppointmentModel = require('../models/appointment-model');
const DealModel = require('../models/deal-model');
const OrganizationModel = require('../models/organization-model');

let user = {
  data: [
    {
      isActive: true,
      primary: true,
      twoFactor: { isVerified: true, otp: "0" },
      age: 21,
      name: "Lina Erika",
      gender: "female",
      email: "erikawarner@kinetica.com",
      phone: "1111111111",
      address: "688 Royce Street, Hardyville, Wisconsin, 324",
      userType: "SA",
    },
    {
      primary: true,
      twoFactor: { isVerified: true, otp: "0" },
      isActive: true,
      age: 35,
      eyeColor: "brown",
      name: "Lauren Maxine",
      lastName: "",
      gender: "female",
      email: "maxinewarner@kinetica.com",
      phone: "2222222222",
      address: "643 Love Lane, Lowell, Arizona, 729",
      userType: "MR",
    },
  ],
  function: async () => {
    await UserModel.deleteMany({});
    await UserModel.insertMany(user.data);

    await AppointmentModel.deleteMany({});
    await OrganizationModel.deleteMany({});
    await DealModel.deleteMany({});
    
    console.log("Seeded Successfull.");
  },
};

module.exports = { user }
