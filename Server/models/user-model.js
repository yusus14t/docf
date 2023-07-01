const { Schema, model, Types, SchemaType } = require("mongoose");

const userSchema = new Schema(
  {
    fullName: { type: String },
    email: { type: String },
    age: { type: String },
    address: { type: String },
    gender: { type: String, enum: ["M", "F", "O"] },
    Nationalty: { type: String },
    phone: { type: String, required: true },
    photo: { type: String, default: null },
    password: { type: String, default: null },
    userType: { type: String, default: "PT", enum: ["PT", "MR", "SA", "DR"] },
    organizationId: { type: Schema.Types.ObjectId, ref: "organization" },
    isActive: { type: Boolean, default: false },
    qualification: { type: String },
    experience: { type: String },
    specialization: { type: String },
    bloodGroup: { type: String },
    isPortal: { type: Boolean, default: false },
    aboutme: { type: String }, 
    twoFactor: {
      otp: { type: String },
      isVerified: { type: Boolean, default: false },
    },
    relation: [
      {
        relationType: { type: String },
        name: { type: String },
        phone: { type: String },
      },
    ],

    identity: [
      {
        type: { type: String },
        number: { type: String },
      },
    ],

    bank: {
      name: { type: String },
      account: { type: String },
      isfc: { type: String },
    },
    createdBy: { type: Schema.Types.ObjectId },
  },
  { timestamps: true }
);

module.exports = model("user", userSchema);

// Promise.resolve(model('user', userSchema).updateOne({_id: Types.ObjectId('643a1d83621bb6bfe3a3b77b')}, { twoFactor: { isVerified: true } }))
// .then( s => console.log(s) )
