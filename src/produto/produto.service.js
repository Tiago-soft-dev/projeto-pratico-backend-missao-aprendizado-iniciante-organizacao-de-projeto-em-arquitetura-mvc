const { ObjectId } = require('mongodb')
const {getDatabase} = require('../db/database-connection')



function getCollection(){
    return getDatabase().collection('produto')
}

function readAll(){
    return getCollection().find().toArray()
}

function readById(id){
    // const id = id
    return getCollection().findOne({_id: new ObjectId(id)})
}

function create(novoProduto){
    return getCollection().insertOne(novoProduto)
}

function update(id, update){
    const produtoId = id
    const produtoUpdate = update
    return getCollection().updateOne(
        {_id: new ObjectId(produtoId)},
        {$set: produtoUpdate}
    ) 
}

function deleteById(id){
    return getCollection().deleteOne({_id: new ObjectId(id)})
}


module.exports = {
    readAll,
    readById,
    create,
    update,
    deleteById
}