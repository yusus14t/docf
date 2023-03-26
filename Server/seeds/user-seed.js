const UserModel = require('../models/user-model');
let user = { 
    data: [
            {
                name: "Hamson",
                age: "22"
            },
            {
                name: "Amir",
                age: "24"
            },
            {
                name: "Sharik",
                age: "28"
            },
            {
                name: "Sahil",
                age: "22"
            },
            {
                name: "Rahul",
                age: "23"
            },
        ],
    function: async () => {
        await UserModel.deleteMany({});
        await UserModel.insertMany(user.data);
        console.log('Seeded Successfull.')
    }
}

module.exports = { user }
