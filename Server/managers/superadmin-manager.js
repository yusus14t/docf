
const UserModel  = require('../models/user-model'); 
const { Success, Error } = require('../constants/utils')


const getProfile = async ( body ) => {
    try {
        console.log('Manager Call');
        let data = 'Profile Detail'
        return { data } ;
    } catch ( error ) { console.log(error) }
}

const analytics = async ( body ) => {
    try {
        let today = new Date()
        let analyticsData = await UserModel.aggregate([
        {
            $facet: {
                total_users: [

                    {
                        $group: {
                            _id: '$userType',
                            count: { $sum: 1 }
                        }
                    },
                ],
                today_users: [
                    {
                        $match: { createdAt: { $lte: today } }
                    },
                    {
                        $group:{
                            _id: '$userType',
                            count: { $sum: 1 }
                        }
                    },
                ],
            },
        }
       ])

       console.log(analyticsData[0])
        return Success({ analyticsData }) ;
    } catch ( error ) { console.log(error) }
}

module.exports = {
    getProfile,
    analytics,
}