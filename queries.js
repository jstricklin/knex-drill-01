const database = require("./database-connection");

module.exports = {
    list(){
        return database.select().from('resolutions')
    },
    read(id){
        return database('resolutions')
            .where('id', id)
            .then(resolution => resolution[0])
    },
    create(resolution){
        if (!resolution.dueDate || !resolution.resolution){
            return
        }
        return database('resolutions').insert({dueDate: resolution.dueDate, resolution: resolution.resolution})
            .returning('*')
            .then(resolution => resolution[0])
    },
    update(id, resolution){
        return database('resolutions')
            .where('id', id)
            .update({'resolution':resolution.resolution, 'dueDate':resolution.dueDate}, '*')
    },
    delete(id){
        return database('resolutions')
            .where('id', id)
            .del()
    }
};
