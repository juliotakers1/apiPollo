const express = require('express');

const CategoriaCtrl = require('../controllers/CategoriaController');
// const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion.js');

const Router = express.Router();

Router.get('/',   CategoriaCtrl.index) //api.com/Categoria/
        .post('/',    CategoriaCtrl.create)
        .get('/:key/:value',  CategoriaCtrl.find, CategoriaCtrl.show) 
        .put('/:key/:value',   CategoriaCtrl.find,CategoriaCtrl.update)
        .delete('/:key/:value',  CategoriaCtrl.find,CategoriaCtrl.remove);

module.exports = Router; 