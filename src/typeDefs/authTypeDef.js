const { gql } = require('apollo-server');
const authTypes = gql `
    type Tokens{
        refresh: String!
        access: String!
        }

    type Access{
        access:String!
        }

    input CredentialsInput{
        username:String!,
        password:String!
        }

    input SignUpInput{
        username:String!
        password:String!
        name:String!
        email:String!
        }

    input token{
        refresh:String!
    }

    type UserDetail{
        id:Int!
        username:String!
        password:String!
        name:String!
        email:String!
        }

    type Query {
        userDetailById(userId:Int!):UserDetail!
        }

    type Mutation{
        signUpUser(userInput:SignUpInput):Tokens!
        logIn(credentials:CredentialsInput!):Tokens!
        refreshToken(token:token!):Access!
        }

`;

module.exports=authTypes;