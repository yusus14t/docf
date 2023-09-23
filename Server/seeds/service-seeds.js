const serviceModel = require("../models/service-model");

module.exports.service = {
  data: [
    { id: "PARKING", name: "Parking", isDefault: true },
    { id: "AMBULANCE", name: "Ambulance", isDefault: true },
    { id: "WAITING", name: "Waiting", isDefault: true },
    { id: "FOOD_FOR_PATIENT", name: "Fooding for Patients", isDefault: true },
    { id: "ECHO", name: "ECHO", isDefault: true },
    { id: "CARE_TAKER", name: "Care Taker", isDefault: true },
    { id: "ENDOSCOPY", name: "ENDOSCOPY", isDefault: true },
    { id: "NICU", name: "NICU", isDefault: true },
    { id: "CATHLAB", name: "CATHLAB", isDefault: true },
    { id: "OPERATION_THEATRE", name: "Operation Theatre", isDefault: true },
    { id: "VENTILATOR", name: "Ventilator", isDefault: true },
    { id: "ULTRASOUND", name: "Ultrasound", isDefault: true },
    { id: "ECG", name: "ECG Services", isDefault: true },
    { id: "PHARMACY", name: "Pharmacy", isDefault: true },
    { id: "ROOM_FACILITY", name: "Room Facility", isDefault: true },
    { id: "MRI", name: "MRI", isDefault: true },
    { id: "CT_SCAN", name: "CT Scan", isDefault: true },
    { id: "BLOOD_BANK", name: "Blood Bank", isDefault: true },
    { id: "ICU", name: "ICU", isDefault: true },
    { id: "OXYGEN", name: "Oxygen", isDefault: true },
  ],
  store: async () => {
    await serviceModel.deleteMany({});
    await serviceModel.insertMany(this.service.data);
  },
};
