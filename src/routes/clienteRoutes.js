const express = require('express')
const router = express.Router()
const { clienteController } = require('../controllers/clienteController') 

// GET /clientes -> listar os clientes
router.get('/clientes', clienteController.listarCliente)

//POST /clientes -> adicionar novo cliente
router.post('/clientes', clienteController.criarCliente)

module.exports = {
    clienteRoutes: router
}