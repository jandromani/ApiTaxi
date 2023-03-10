const mongoose = require('mongoose');

const pedidosSchema = new mongoose.Schema({
  idSolicitud: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  origen: {
    type: String,
    required: true,
  },
  destino: {
    type: String,
    required: true,
  },
  idConductor: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
});

const Pedidos = mongoose.model('Pedidos', pedidosSchema);

module.exports = Pedidos;
