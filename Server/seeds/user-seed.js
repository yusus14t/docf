const UserModel = require('../models/user-model');
let user = { 
    data: [
            {
              isActive: true,
              age: 34,
              eyeColor: "brown",
              firstName: "Tracy",
              lastName: "Humphrey",
              gender: "male",
              email: "humphreywarner@kinetica.com",
              phone: "+1 (839) 424-3037",
              address: "670 Minna Street, Delwood, Colorado, 4570",
              userType: 'DR',
              password: "$2b$10$09QFwKOL7c4.N5ZeP4qubuWvg.XhTDuSSQkGqDMd5TLDbcJUXYC3u"
            },
            {
              isActive: true,
              age: 29,
              eyeColor: "brown",
              firstName: "Imogene",
              lastName: "Dee",
              gender: "female",
              email: "deewarner@kinetica.com",
              phone: "+1 (839) 546-3939",
              address: "636 Nelson Street, Slovan, West Virginia, 5689",
              userType: 'DR',
              password: "$2b$10$09QFwKOL7c4.N5ZeP4qubuWvg.XhTDuSSQkGqDMd5TLDbcJUXYC3u"

            },
            {
              isActive: true,
              age: 21,
              eyeColor: "brown",
              firstName: "Lina",
              lastName: "Erika",
              gender: "female",
              email: "erikawarner@kinetica.com",
              phone: "+1 (961) 537-2673",
              address: "688 Royce Street, Hardyville, Wisconsin, 324",
              userType: 'DR',
              password: "$2b$10$09QFwKOL7c4.N5ZeP4qubuWvg.XhTDuSSQkGqDMd5TLDbcJUXYC3u"

            },
            {
              isActive: true,
              age: 35,
              eyeColor: "brown",
              firstName: "Lauren",
              lastName: "Maxine",
              gender: "female",
              email: "maxinewarner@kinetica.com",
              phone: "+1 (872) 592-3588",
              address: "643 Love Lane, Lowell, Arizona, 729",
              userType: 'DR',
              password: "$2b$10$09QFwKOL7c4.N5ZeP4qubuWvg.XhTDuSSQkGqDMd5TLDbcJUXYC3u"

            },
            {
              isActive: true,
              age: 37,
              eyeColor: "blue",
              firstName: "Blevins",
              lastName: "Peterson",
              gender: "male",
              email: "petersonwarner@kinetica.com",
              phone: "+1 (982) 561-2577",
              address: "707 Manhattan Avenue, Bethpage, Mississippi, 4039",
              userType: 'DR',
              password: "$2b$10$09QFwKOL7c4.N5ZeP4qubuWvg.XhTDuSSQkGqDMd5TLDbcJUXYC3u"

            },
            {
              isActive: true,
              age: 23,
              eyeColor: "green",
              firstName: "Bridgett",
              lastName: "Patti",
              gender: "female",
              email: "pattiwarner@kinetica.com",
              phone: "+1 (994) 456-3338",
              address: "796 Conduit Boulevard, Washington, New Jersey, 1978",
              userType: 'DR',
              password: "$2b$10$09QFwKOL7c4.N5ZeP4qubuWvg.XhTDuSSQkGqDMd5TLDbcJUXYC3u"

            },
            {
              isActive: true,
              age: 30,
              eyeColor: "green",
              firstName: "Michelle",
              lastName: "Simmons",
              gender: "male",
              email: "simmonswarner@kinetica.com",
              phone: "+1 (992) 528-3197",
              address: "251 Woods Place, Needmore, Texas, 8106",
              userType: 'DR',
              password: "$2b$10$09QFwKOL7c4.N5ZeP4qubuWvg.XhTDuSSQkGqDMd5TLDbcJUXYC3u"

            }
        ],
    function: async () => {
        await UserModel.deleteMany({});
        await UserModel.insertMany(user.data);
        console.log('Seeded Successfull.')
    }
}

module.exports = { user }
