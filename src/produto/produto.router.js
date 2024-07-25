const express=require('express')
const produtoController = require('./produto.controller')
const router=express.Router()

function teste(req,res){
    res.send('ok')
}

router.get('/', produtoController.readAll)
router.get('/:id', produtoController.readById)
router.post('/', produtoController.create)
router.put('/:id', produtoController.update)
router.delete('/:id', produtoController.deleteById)

module.exports = router