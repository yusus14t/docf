const UserModel = require('../models/user-model');
let user = { 
    data: [
            {
                name: "Hamson",
                age: "22",
                emai:'user1@acadtech.com',
            },
            {
                name: "Amir",
                age: "24",
                emai:'user2@acadtech.com',
            },
            {
                name: "Sharik",
                age: "28",
                emai:'user3@acadtech.com',
            },
            {
                name: "Sahil",
                age: "22",
                emai:'user4@acadtech.com',
            },
            {
                name: "Rahul",
                age: "23",
                emai:'user5@acadtech.com',
            },
        ],
    function: async () => {
        await UserModel.deleteMany({});
        await UserModel.insertMany(user.data);
        console.log('Seeded Successfull.')
    }
}

module.exports = { user }
