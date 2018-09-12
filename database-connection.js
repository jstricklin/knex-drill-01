const dbConnection = require('./knexfile.js')[process.env.NODE_ENV || 'development']
const knex = require('knex')(dbConnection)

module.exports = {
    getAll(){
        return knex.select().from('resolutions').orderBy('id','desc')
    },
    create(resolution) {
        return knex('resolutions').insert(resolution)
    },
    update(id, resolution){
        return knex.select().from('resolutions')
            .where('id', '=', id)
            .update('resolution', resolution.resolution)
    },
    delete(id){
        return knex.select().from('resolutions')
            .where('id', '=', id)
            .del()
    }
}
