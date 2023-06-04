let specialization = { 
    data: [
            {
              id:"PUMONOLOGIST",
              name:"Punomologist",
              description:"",
            },

           {
              id:"HEPATOLOGIST",
              name:"Hepatologist",
              description:"",
            },
            {
              id:"NEPHROLOGIST ",
              name:"Nephrologist",
              description:"",
            },
            {
              id:"DERMATOLOGIST ",
              name:"Dermatologist",
              description:"",
            },
            {
              id:"ENDOCRINOLOGIST",
              name:"Endocrinnologist",
              description:"",
            },
            {
              id:"UROLOGIST",
              name:"Urologist",
              description:"",
            },
            {
              id:"GENERAL-PHYSICIAN ",
              name:"General Physician",
              description:"",
            },
            {
              id:"RADIOCOLOGIST",
              name:"Radiologist",
              description:"",
            },
            {
              id:"ORTHOPEDIC ",
              name:"Orthophedic",
              description:"",
            },
            {
              id:"PAEDIATRICIAN",
              name:"Paediatrician",
              description:"",
            },
            {
              id:"RHEUMATOLOGISTS",
              name:"Rheumatologist",
              description:"",
            },
            {
              id:"CARDIOLOGIST",
              name:"Cardiologist",
              description:"",
            },
            {
                id:"NEUROLOGIST",
                name:"Neurologist",
                description:""
            },
            {
                id:"GYNEOCOLOGIST",
                name:"Gyneoclogist",
                description:""
            },
            {
                id:"ONCOLOGIST",
                name:"Oncologist",
                description:""
            },
            {
                id:"OPHTHALMOLOGIST",
                name:"Ophthalmologist",
                description:""
            },
            {
                id:"PSYCHIATRISTS",
                name:"Phsychiatrists",
                description:""
            },
            {
                id:"IMMUNOLOGIST ",
                name:"Immunologist",
                description:""
            },
            
            {
                id:"GASTROENTEROLOGIST",
                name:"Gastroenterologist",
                description:""
            }
        ],
    function: async () => {
        await UserModel.deleteMany({});
        await UserModel.insertMany(specialization.data);
        console.log('Seeded Successfull.')
    }
}

module.exports = { specialization }
