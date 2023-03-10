const express = require('express');
const pedidosController = require('../controllers/pedidosController');

const router = express.Router();

router.post('/', pedidosController.crearPedido);
router.get('/:id', pedidosController.obtenerPedido);
router.put('/:id', pedidosController.actualizarPedido);
router.delete('/:id', pedidosController.eliminarPedido);

module.exports = router;
