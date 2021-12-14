const petResolver = {
    Query : {
        petAPIbyId:(_,{pk}, {dataSources}) => { 
            
            return  dataSources.petApi.getPet(pk)

        },
        petsAPI:(_,{},{dataSources}) =>{

            return  dataSources.petApi.getPets()

        }


    },

    Mutation :{


        petAPI:async(_,{petInput},{dataSources})  =>
        {
            return await dataSources.petApi.createPet(petInput)

        },

        updatePetAPI:async(_,{petUpdateInput}, {dataSources}) => {
            
            return await dataSources.petApi.updatePet(petUpdateInput)
        },

        deletePetAPI:async(_,{id_pet},{dataSources}) => {

            return await dataSources.petApi.deletePet(id_pet)
        }
    }
};
module.exports = petResolver;