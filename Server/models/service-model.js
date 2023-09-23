const { Schema, model } = require("mongoose");

const serviceSchema = new Schema(
  {
    id: { type: String },
    name: { type: String },
    isDefault: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = model("sevice", serviceSchema);
