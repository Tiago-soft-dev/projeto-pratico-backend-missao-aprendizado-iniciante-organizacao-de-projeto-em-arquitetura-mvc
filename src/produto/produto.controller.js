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
    const produto = await produtoService.readById(id)
        if(!produto){
            return res.send('produto não encontrado')
        }
    res.send(produto)
}

async function create(req,res){
    const novoProduto = req.body
        if(!novoProduto){
            return res.send('corpo da requisição inválido')
        }
    await produtoService.create(novoProduto)
    res.send(novoProduto)
}

async function update(req,res){
    const id = req.params.id
    const update = req.body
        if(!id || !update){
            return res.send('dados informados inválidos')
        }
    await produtoService.update(id, update)
    res.send(update)
}

async function deleteById(req,res){
    const id = req.params.id
        if(!id){
            return res.send('produto não encontrado')
        }
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