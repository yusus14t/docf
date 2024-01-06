const { Schema, model, Types, SchemaType } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    age: { type: String },
    address: { type: String },
    gardianName: { type: String },
    gender: { type: String, enum: ["male", "female", "other"] },
    phone: { type: String, required: true },
    photo: { type: String, default: null },
    userType: { type: String, enum: [ "PT", "MR", "SA", "DR", "CL", "DP", 'HL', 'AD' ] },
    organizationId: { type: Schema.Types.ObjectId, ref: "organization" },
    hospitalId: { type: Schema.Types.ObjectId, ref: "organization" },
    isActive: { type: Boolean, default: false },
    qualification: { type: String },
    experience: { type: String },
    specialization: {
      id: { type: String },
      name: { type: String }
    },
    bloodGroup: { type: String },
    primary: { type: Boolean, default: false },
    aboutme: { type: String }, 
    twoFactor: {
      otp: { type: String },
      isVerified: { type: Boolean, default: false },
    },
    createdBy: { type: Schema.Types.ObjectId },
    timing: [
      { 
          day: { type: String },
          open: { type: String },
          close: { type: String },
          morning: {
              open: { type: String },
              close: { type: String },
          },
          evening: {
              open: { type: String },
              close: { type: String },
          },
      }
    ],
  },
  { timestamps: true }
);

module.exports = model("user", userSchema);

// Promise.resolve(model('user', userSchema).updateOne({_id: Types.ObjectId('643a1d83621bb6bfe3a3b77b')}, { twoFactor: { isVerified: true } }))
// .then( s => console.log(s) )
