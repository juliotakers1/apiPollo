const express = require('express');
const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion.js');
const CategoriaCtrl = require('../controllers/CategoriaController');

const Router = express.Router();

Router.get('/', verificarAuth,CategoriaCtrl.index) //api.com/Categoria/
        .post('/', verificarAuth,CategoriaCtrl.create)
        .get('/:key/:value', verificarAuth,CategoriaCtrl.find, CategoriaCtrl.show) 
        .put('/:key/:value', verificarAuth,CategoriaCtrl.find,CategoriaCtrl.update)
        .delete('/:key/:value', verificarAuth,CategoriaCtrl.find,CategoriaCtrl.remove);

module.exports = Router; 