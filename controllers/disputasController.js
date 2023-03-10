const Disputa = require('../models/disputasModel');

// Función para crear una nueva disputa
exports.crearDisputa = async (req, res) => {
  try {
    const disputa = new Disputa(req.body);
    const resultado = await disputa.save();
    res.status(201).json({
      status: 'success',
      data: {
        disputa: resultado
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.obtenerDisputa = async (req, res) => {
  try {
    const disputa = await Disputa.findById(req.params.id);

    if (!disputa) {
      throw new Error('Disputa no encontrada');
    }

    res.status(200).json({
      status: 'success',
      data: {
        disputa
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.actualizarDisputa = async (req, res) => {
  try {
    const { estado } = req.body;

    const disputa = await Disputa.findByIdAndUpdate(
      req.params.id,
      {
        estado
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!disputa) {
      throw new Error('Disputa no encontrada');
    }

    res.status(200).json({
      status: 'success',
      data: {
        disputa
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.eliminarDisputa = async (req, res) => {
  try {
    const disputa = await Disputa.findByIdAndDelete(req.params.id);

    if (!disputa) {
      throw new Error('Disputa no encontrada');
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};
