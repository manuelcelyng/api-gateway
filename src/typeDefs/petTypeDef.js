const {gql} = require('apollo-server');
const petTypes = gql `
    type getpets {
        id_pet:Int!
        name:String!
        specie:String!
        breed:String!
        gender:String!
        bday_aprox:String! 
        date_register:String!
        description:String!
        image:String!
        avaliable:Boolean!
        user:Int!
        }

    input updatePet {
        id_pet:Int!
        name:String!
        specie:String!
        breed:String!
        gender:String!
        bday_aprox:String!
        date_register:String!
        description:String!
        image:String!
        avaliable:Boolean!
        user:Int!
    }

    input setpet {
        name:String!
        specie:String!
        breed:String!
        gender:String!
        bday_aprox:String!
        date_register:String!
        description:String!
        image:String!
        avaliable:Boolean!
        user:Int!
    }

    extend type Query {
        petAPIbyId(pk:Int!):getpets!
        petsAPI:[getpets]
    }

    extend type Mutation {
        petAPI(petInput:setpet!):String!
        updatePetAPI(petUpdateInput:updatePet!):String!
        deletePetAPI(id_pet:String!):String!
    }
    `;

module.exports = petTypes;

    