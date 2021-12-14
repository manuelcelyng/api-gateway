const customerResolver ={
    Query:{
        customerDetailById:async(_,{correo,username},{dataSources}) => {
            return await dataSources.registerAPI.cutomerById(correo,username);
        },
        customersDetailByUsername:async(_,{username},{dataSources}) =>{
            return await dataSources.registerAPI.cutomersByUsername(username);
        }
    },
    Mutation:{
        createCustomer:async(_,{custommInput},{dataSources}) => {
            return await dataSources.registerAPI.createCustomer(custommInput);
        },
        deleteCustomer:async(_,{correo,username},{dataSources}) => {
            return  await dataSources.registerAPI.deleteById(correo,username);
        }
    }
};
module.exports = customerResolver;