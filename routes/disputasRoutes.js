const express = require('express');
const disputasController = require('../controllers/disputasController');

const router = express.Router();

router.post('/', disputasController.crearDisputa);
router.get('/:id', disputasController.obtenerDisputa);
router.put('/:id', disputasController.actualizarDisputa);
router.delete('/:id', disputasController.eliminarDisputa);

module.exports = router;