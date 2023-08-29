const UserModel = require("../models/user-model");
const AppointmentModel = require("../models/appointment-model");
const DealModel = require("../models/deal-model");
const OrganizationModel = require("../models/organization-model");

let user = {
  data: [
    {
      isActive: true,
      primary: true,
      twoFactor: { isVerified: true, otp: "0" },
      age: 21,
      name: "Yusuf",
      email: "Yusuf14t@gmail.com",
      phone: "8474986168",
      address: "688 Royce Street, Hardyville, Wisconsin, 324",
      userType: "SA",
    },
    {
      isActive: true,
      primary: true,
      twoFactor: { isVerified: true, otp: "0" },
      age: 21,
      name: "Pervez Khan",
      email: "",
      phone: "8533819696",
      address: "688 Royce Street, Hardyville, Wisconsin, 324",
      userType: "SA",
    },
    
    {
      isActive: true,
      primary: true,
      twoFactor: { isVerified: true, otp: "0" },
      age: 21,
      name: "Abdul",
      email: "realhamson@gmail.com",
      phone: "8273237781",
      address: "688 Royce Street, Hardyville, Wisconsin, 324",
      userType: "SA",
    },
    {
      primary: true,
      twoFactor: { isVerified: true, otp: "0" },
      isActive: true,
      age: 35,
      eyeColor: "brown",
      name: "Test Mr1",
      lastName: "",
      email: "maxinewarner@kinetica.com",
      phone: "8218397850",
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

module.exports = { user };
