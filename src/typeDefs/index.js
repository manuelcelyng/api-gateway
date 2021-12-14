const authTypes = require('./authTypeDef.js');
const petTypes  = require('./petTypeDef.js');
const customTypes = require('./registerTypeDefs.js')


const schemasArrays  =  [authTypes,petTypes,customTypes];
module.exports       =  schemasArrays;



