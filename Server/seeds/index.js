const mongoose = require("mongoose");
const UserSeed = require("../seeds/user-seed");
const SettingSeed = require("../seeds/website-seed");
const specializationSeed = require("./specialization-seed");
const serviceSeed = require("./service-seeds");
const appointmentModel = require("../models/appointment-model");

// Database Connection
mongoose.set("strictQuery", false);

mongoose.connect(
  process.env.DATABASE_URL || "mongodb://0.0.0.0:27017/AcadTech"
);
const database = mongoose.connection;
database.once("connected", () => console.log("Database Connected"));


// Registered Seeds
const seeds = [
  { name: "user", store: () => UserSeed.user.store() },
  { name: "setting", store: () => SettingSeed.setting.store() },
  { name: "specialization", store: () => specializationSeed.specialization.store() },
  { name: "service", store: ()=> serviceSeed.service.store()},
  { name: "appointment", store: async () => {
    await appointmentModel.deleteMany({})
  }},
];

let args = process.argv.slice(2);

const Seeding = async () => {
  for( let seed of seeds ) {
    if (!args.length || args.includes(seed.name)) {
      console.log(`Seeding ${seed.name} ....`);
      await seed.store();
    }
  };
  console.log("Seeded Successfull.");
  process.exit();
};

Seeding();
// node seeds
