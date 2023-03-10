const express = require('express');
const solicitudesController = require('../controllers/solicitudesController');

const router = express.Router();

router.post('/', solicitudesController.crearSolicitud);
router.get('/:id', solicitudesController.obtenerSolicitud);
router.put('/:id', solicitudesController.actualizarSolicitud);
router.delete('/:id', solicitudesController.eliminarSolicitud);

module.exports = router;