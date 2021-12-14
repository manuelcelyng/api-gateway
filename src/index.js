const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const authentication = require('./utils/authentication.js')
const AuthApi = require('./dataSources/authAPI.js')
const PetApi = require('./dataSources/petAPI.js')
const RegisterAPI = require('./dataSources/registerAPI');

const server = new ApolloServer({
    context:authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        authApi:new AuthApi(),
        petApi:new PetApi(),
        registerAPI : new RegisterAPI(),
    }),
    introspection:true,
    playground:true

});

server.listen(process.env.PORT || 4000 ).then(({url}) => {
    console.log(`Server ready at ${url}`)
});