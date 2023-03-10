const mongoose = require('mongoose');

const disputaSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  monto: {
    type: Number,
    required: true
  },
  estado: {
    type: String,
    enum: ['pendiente', 'aceptada', 'rechazada'],
    default: 'pendiente'
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true
  },
  conductor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Conductor',
    required: true
  },
  solicitud: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Solicitud',
    required: true
  }
});

module.exports = mongoose.model('Disputa', disputaSchema);
