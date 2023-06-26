const UserModel = require('../models/user-model');
let user = {
  data: [
    {
      isActive: true,
      age: 34,
      lastName: "Humphrey",
      gender: "M",
      email: "humphreywarner@kinetica.com",
      phone: "+18394243037",
      address: "670 Minna Street, Delwood, Colorado, 4570",
      userType: "PT",
      password: "$2b$10$09QFwKOL7c4.N5ZeP4qubuWvg.XhTDuSSQkGqDMd5TLDbcJUXYC3u",
    },
    {
      isActive: true,
      age: 29,
      firstName: "Imogene Dee",
      gender: "F",
      email: "deewarner@kinetica.com",
      phone: "+18395463939",
      address: "636 Nelson Street, Slovan, West Virginia, 5689",
      userType: "DR",
      password: "$2b$10$09QFwKOL7c4.N5ZeP4qubuWvg.XhTDuSSQkGqDMd5TLDbcJUXYC3u",
    },
    {
      isActive: true,
      age: 21,
      fullName: "Lina Erika",
      gender: "F",
      email: "erikawarner@kinetica.com",
      phone: "+19615372673",
      address: "688 Royce Street, Hardyville, Wisconsin, 324",
      userType: "SA",
      password: "$2b$10$09QFwKOL7c4.N5ZeP4qubuWvg.XhTDuSSQkGqDMd5TLDbcJUXYC3u",
    },
    {
      isActive: true,
      age: 35,
      eyeColor: "brown",
      fullName: "Lauren Maxine",
      lastName: "",
      gender: "F",
      email: "maxinewarner@kinetica.com",
      phone: "+18725923588",
      address: "643 Love Lane, Lowell, Arizona, 729",
      userType: "MR",
      password: "$2b$10$09QFwKOL7c4.N5ZeP4qubuWvg.XhTDuSSQkGqDMd5TLDbcJUXYC3u",
    },
  ],
  function: async () => {
    await UserModel.deleteMany({});
    await UserModel.insertMany(user.data);
    console.log("Seeded Successfull.");
  },
};

module.exports = { user }
