const database = require("./database-connection");

module.exports = {
    list(){
        return database.getAll()
    },
    read(id){
        return database.getAll().then(result => result.filter(elem => elem.id == id)[0])
    },
    create(resolution){
        console.log(resolution)
        if (!resolution.dueDate || !resolution.resolution){
            return
        }
        return database.create('resolutions').insert({dueDate: resolution.dueDate, resolution: resolution.resolution})
            .returning('id')
            .then(id => database.getAll().then(result => result.filter(elem => elem.id == id)[0]))
    },
    update(id, resolution){
        return database.update(id, resolution)
            .then(id => database.getAll().then(result => result.filter(elem => elem.id == id)))
    },
    delete(id){
        return database.delete(id)
    }
};
