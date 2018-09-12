
exports.up = function(knex, Promise) {
    return knex.schema.createTable("resolutions", (resolution)=>{
        resolution.increments('id')
        resolution.string('dueDate')
        resolution.string('resolution')
    })
};

exports.down = function(knex, Promise) {
        return knex.schema.dropTableIfExists('resolutions')
};
