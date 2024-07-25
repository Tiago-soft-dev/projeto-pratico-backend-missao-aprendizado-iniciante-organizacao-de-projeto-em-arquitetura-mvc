const produtoService = require('./produto.service')

// async function readAll(req,res){
//     const produtos = await produtoService.readAll
//     res.send(produtos)
// }

async function readAll(req,res){
    const produtos = await produtoService.readAll()
    res.send(produtos)
}

async function readById(req,res){
    const id = req.params.id
    console.log(id);
    const produto = await produtoService.readById(id)
    res.send(produto)
}

async function create(req,res){
    const novoProduto = req.body
    await produtoService.create(novoProduto)
    res.send(novoProduto)
}

async function update(req,res){
    const id = req.params.id
    const update = req.body
    await produtoService.update(id, update)
    res.send(update)
}

async function deleteById(req,res){
    const id = req.params.id
    await produtoService.deleteById(id)
    res.send('produto deletado com sucesso')
}


module.exports = {
    readAll,
    readById,
    create,
    update,
    deleteById
}