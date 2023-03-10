const Pedidos = require('../models/pedidosModel');

// Controladores de pedidos
const crearPedido = async (req, res) => {
  try {
    const pedido = new Pedidos(req.body);
    const resultado = await pedido.save();
    res.status(201).json(resultado);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al crear el pedido');
  }
};

const obtenerPedido = async (req, res) => {
  try {
    const pedido = await Pedidos.findById(req.params.id);
    if (!pedido) {
      return res.status(404).send('El pedido solicitado no existe');
    }
    res.status(200).json(pedido);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener el pedido');
  }
};

const actualizarPedido = async (req, res) => {
  try {
    const pedido = await Pedidos.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!pedido) {
      return res.status(404).send('El pedido solicitado no existe');
    }
    res.status(200).json(pedido);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al actualizar el pedido');
  }
};

const eliminarPedido = async (req, res) => {
  try {
    const pedido = await Pedidos.findByIdAndDelete(req.params.id);
    if (!pedido) {
      return res.status(404).send('El pedido solicitado no existe');
    }
    res.status(200).json({ message: 'Pedido eliminado exitosamente' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al eliminar el pedido');
  }
};

module.exports = {
  crearPedido,
  obtenerPedido,
  actualizarPedido,
  eliminarPedido
};
