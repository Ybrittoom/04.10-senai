const express = require('express')
const router = express.Router()
const { produtoController } = require('../controllers/produtoController')

//GET /produtos -> listar todos os produtos
router.get('/produtos', produtoController.listarProdutos)

//POST /produtos -> criar um novo produto
router.post('/produtos', produtoController.criarProduto)

// ao exportar temos que dar um nome 
module.exports = {
    produtoRoutes: router
}