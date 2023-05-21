const { Schema, model} = require('mongoose');

const UserTypes = [
    { 'PT': 'Patient' },
    { 'MR': 'MR' },
    { 'AD': 'Admin' },
    { 'DR': 'Doctor' },
]

const OrganizationType = [
    { 'CL': 'Clinic' },
    { 'HS': 'Hospital' },
    { 'MD': 'Medical' },
]

const commonSchema = {
    createBy: { type: Schema.Types.ObjectId, ref: 'user' },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'user' }
}