const mongoose = require('mongoose')
const appointmentModel = require("../models/appointment-model");
const dealModel = require("../models/deal-model");
const noticeModel = require("../models/notice-model");
const notification = require("../models/notification-model");
const organizationModel = require("../models/organization-model");
const settingModel = require("../models/setting-model");
const specializationModel = require("../models/specialization-model");
const ticketModel = require("../models/ticket-model");
const transactionModel = require("../models/transaction-model");
const userModel = require("../models/user-model");
const websiteImageModel = require("../models/website-image-model");

mongoose.set("strictQuery", false);

mongoose.connect(
  process.env.DATABASE_URL || "mongodb://0.0.0.0:27017/AcadTech"
);
const database = mongoose.connection;
database.once("connected", () => console.log("Database Connected"));



(async () => {
    await appointmentModel.deleteMany({})
    await organizationModel.deleteMany({})
    await dealModel.deleteMany({})
    await notification.deleteMany({})
    await websiteImageModel.deleteMany({})
    await noticeModel.deleteMany({})
    await settingModel.deleteMany({})
    await specializationModel.deleteMany({})
    await ticketModel.deleteMany({})
    await transactionModel.deleteMany({})
    await userModel.deleteMany({})
    console.log('all data cleared')
    process.exit()
})()
