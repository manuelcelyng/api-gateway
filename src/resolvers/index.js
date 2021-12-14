const authResolver = require('./authResolver.js');
const petResolver = require('./petResolver.js');
const registerResolver = require('./registerResolver.js')
const lodash = require('lodash');



const resolvers = lodash.merge(authResolver,petResolver,registerResolver);

module.exports = resolvers;