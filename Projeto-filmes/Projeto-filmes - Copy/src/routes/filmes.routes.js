const express = require('express')
const router = express.Router()
const FilmesController = require('./controller/filmes.controller.js')



router.get('/', FilmesController.listar)

router.post('/', FilmesController.create)

router.put('/:id', FilmesController.update)

router.delete('/:id', FilmesController.deletar)

router.patch('/:id', FilmesController.patch)