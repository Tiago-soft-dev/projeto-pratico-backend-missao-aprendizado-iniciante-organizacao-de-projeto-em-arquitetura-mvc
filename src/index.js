require('dotenv').config()
const express=require('express')
const { connectToDatabase } = require('./db/database-connection')
const produtoRouter = require('./produto/produto.router')

const port = 3000





async function main(){

    await connectToDatabase()
    const app=express()
    app.use(express.json())
    app.use('/produtos', produtoRouter)
    


app.listen(port, ()=>{
    console.log(`servidor online em localhost:${port}`);
})
}
main()