const { gql } = require('apollo-server');

const customTypes = gql `

    type customret{
        id_:String!
        username:String!
        nombres:String!  
        apellidos:String!
        cedula:String!
        celular:String!
        correo:String!
        barrio:String!
        direccion:String!
        idMascota:Int!
        casapropia:Boolean!
        homejob:Boolean!
        cuidador:Boolean!
        salario:Int!
        numMascotas:Int!
        recomendado:Boolean!
    }
    input customInput{
        id_:String!
        username:String!
        nombres:String!  
        apellidos:String!
        cedula:String!
        celular:String!
        correo:String!
        barrio:String!
        direccion:String!
        idMascota:Int!
        casapropia:Boolean!
        homejob:Boolean!
        cuidador:Boolean!
        salario:Int!
        numMascotas:Int!
        recomendado:Boolean!
    }
 
    type Query{
        customerDetailById(correo:String!,username:String!):customret!
    }
    extend type Query{
        customersDetailByUsername(username:String!):[customret]
    }
    type Mutation {
        createCustomer(custommInput:customInput!):customret!
        deleteCustomer(correo:String!,username:String!):String!

    }
`;
module.exports = customTypes;
