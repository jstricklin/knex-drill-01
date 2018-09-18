
const dbConnection = require('./knexfile.js')[process.env.NODE_ENV || 'development']

module.exports = require('knex')(dbConnection)
