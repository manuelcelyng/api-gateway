const userResolver = { 
    Query: {
        userDetailById: (_,{userId},{dataSources,userIdToken}) => {
            if(userId == userIdToken){
                return dataSources.authApi.getUser(userId);
            }
            else
                return null;
        },
    },  
    Mutation: {
        logIn: async (_,{ credentials },{ dataSources }) => {
            return await dataSources.authApi.authRequest(credentials);

        },
        signUpUser:async (_,{userInput},{dataSources}) => {
            return await dataSources.authApi.createUser(userInput);

        },
        refreshToken: async(_,{token},{dataSources}) => {
            return await dataSources.authApi.refreshToken(token);
        }
    }
 };

 module.exports = userResolver;


