const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class PetAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.pet_api_url;
    }

    async createPet(pet){
        pet = new Object(JSON.parse(JSON.stringify(pet)));
        return await this.post(`/pet/`, pet);
    }

    async updatePet(pet){
        pet = new Object(JSON.parse(JSON.stringify(pet)));

        return await this.put(`/pet/`,pet);
    }

    async deletePet(petId){
        return await this.delete(`/pet/${petId}/`);
    }

    async getPet(petId){
        console.log(petId)
        return await this.get(`/pet/${petId}/`);
    }

    async getPets(){
        return await this.get(`/pet/`);
       
    }
}
module.exports = PetAPI;