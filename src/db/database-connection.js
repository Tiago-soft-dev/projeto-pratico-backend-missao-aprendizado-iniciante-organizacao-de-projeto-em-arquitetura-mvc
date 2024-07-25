const { MongoClient } = require("mongodb")

const dbUrl = process.env.DATABASE_URL
const dbName = process.env.DATABASE_NAME

const client = new MongoClient(dbUrl)

//função de conexão com o database
async function connectToDatabase(){
    console.log(`conectando ao DB...`);
    await client.connect()
    console.log(`DB conectado!`);
}

function getDatabase(){
    return client.db(dbName)
}

module.exports = {
    connectToDatabase,
    getDatabase
}