const UserModel = require("../models/user-model");
let user = {
  data: [
    {
      isActive: true,
      primary: true,
      twoFactor: { isVerified: true, otp: "0" },
      age: 21,
      name: "Yusuf",
      gender: "Male",
      email: "Yusuf14t@gmail.com",
      phone: "8474986168",
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
      gender: "female",
      email: "maxinewarner@kinetica.com",
      phone: "82183978550",
      address: "643 Love Lane, Lowell, Arizona, 729",
      userType: "MR",
    },
  ],
  function: async () => {
    await UserModel.deleteMany({});
    await UserModel.insertMany(user.data);
    console.log("Seeded Successfull.");
  },
};

module.exports = { user };
