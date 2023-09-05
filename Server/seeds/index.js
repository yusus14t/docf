const mongoose = require("mongoose");
const UserSeed = require("../seeds/user-seed");
const AddressSchema = require("../models/address-model");
const fs = require("fs");
const path = require("path");
const settingModel = require("../models/setting-model");

// Database Connection
mongoose.set("strictQuery", false);

mongoose.connect(
  process.env.DATABASE_URL || "mongodb://0.0.0.0:27017/AcadTech"
);
const database = mongoose.connection;
database.once("connected", () => console.log("Database Connected"));

const contactInfo = async () => {
    let data = await settingModel({
        id: 'CONTACT_INFO',
        data: {
            phone: '9528820782',
            whatsapp: '9528820782',
            email: 'contact@doctortime.in',
            twitter: 'Doctortime_',
        }
    }).save()
    console.log('Contact created', data)
}

// Registered Seeds
const seeds = [
  { name: "user", function: () => UserSeed.user.function() },
  { name: "contact-info", function: () => contactInfo() },
];

let args = process.argv.slice(2);

const Seeding = async () => {
  seeds.map((seed) => {
    if (!args.length || args.includes(seed.name)) {
      console.log(`Seeding ${seed.name} ....`);
      seed.function();
    }
  });
};

Seeding();

// node seeds
