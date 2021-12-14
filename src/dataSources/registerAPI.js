const {RESTDataSource} = require('apollo-datasource-rest');
const serverConfig = require('../server');

class RegisterAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.register_api_url;
    }

    async cutomersByUsername(username){
        return await this.get(`/custom/${username}/`);
    }

    async cutomerById(correo,username){
        return await this.get(`/custom/${username}/${correo}/`);
    }
    async createCustomer(registerInput){
        registerInput = new Object(JSON.parse(JSON.stringify(registerInput)));
        return await this.post('/custom/create/',registerInput);
    }
    async deleteById(correo,username){
        return await this.delete(`/custom/delete/${username}/${correo}/`);
    }

}
module.exports = RegisterAPI;