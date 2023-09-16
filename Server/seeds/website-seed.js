const settingModel = require("../models/setting-model");
module.exports.setting = {
    data: [
        {
            id: 'CONTACT_INFO',
            data: {
                phone: '9528820782',
                whatsapp: '9528820782',
                email: 'contact@doctortime.in',
                twitter: 'Doctortime_',
            }
        },
        {
            id: 'PAYMENT',
            data: {
                type: 'month',
                organization: 'clinic',
                price: 1000,
                discount: 0,
            }
        },
        {
            id: 'PAYMENT',
            data: {
                type: 'quater',
                organization: 'clinic',
                price: 2500,
                discount: 500,
            }
        },
        {
            id: 'PAYMENT',
            data: {
                type: 'halfYear',
                organization: 'clinic',
                price: 5000,
                discount: 1000,
            }
        },
        {
            id: 'PAYMENT',
            data: {
                type: 'year',
                organization: 'clinic',
                price: 10000,
                discount: 2000,
            }
        },
        {
            id: 'PAYMENT',
            data: {
                type: 'month',
                organization: 'hospital',
                price: 2000,
                discount: 0,
            }
        },
        {
            id: 'PAYMENT',
            data: {
                type: 'quater',
                organization: 'hospital',
                price: 5500,
                discount: 500,
            }
        },
        {
            id: 'PAYMENT',
            data: {
                type: 'halfYear',
                organization: 'hospital',
                price: 11000,
                discount: 1000,
            }
        },
        {
            id: 'PAYMENT',
            data: {
                type: 'year',
                organization: 'hospital',
                price: 22000,
                discount: 2000,
            }
        },
        {
            id: 'PAYMENT',
            data: {
                organization: 'patient',
                price: 10,
            }
        },
    ],
    function: async () => {
        await settingModel.deleteMany()
        await settingModel.insertMany(this.setting.data)
        console.log('complete...')
    }
}