const mongoose = require('mongoose');

const solicitudSchema = new mongoose.Schema({
  nombreCliente: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  origen: {
    type: String,
    required: true
  },
  destino: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    enum: ['pendiente', 'en progreso', 'completado', 'cancelado'],
    default: 'pendiente'
  }
});

const Solicitud = mongoose.model('Solicitud', solicitudSchema);

module.exports = Solicitud;
