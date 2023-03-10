const Solicitud = require('../models/solicitudesModel');

exports.crearSolicitud = (req, res) => {
  const nuevaSolicitud = new Solicitud(req.body);

  nuevaSolicitud.save((error, solicitud) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).json(solicitud);
    }
  });
};

exports.obtenerSolicitud = (req, res) => {
  Solicitud.findById(req.params.id, (error, solicitud) => {
    if (error) {
      res.status(500).send(error);
    } else if (!solicitud) {
      res.status(404).send('Solicitud no encontrada');
    } else {
      res.json(solicitud);
    }
  });
};

exports.actualizarSolicitud = (req, res) => {
  Solicitud.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, solicitud) => {
    if (error) {
      res.status(500).send(error);
    } else if (!solicitud) {
      res.status(404).send('Solicitud no encontrada');
    } else {
      res.json(solicitud);
    }
  });
};

exports.eliminarSolicitud = (req, res) => {
  Solicitud.findByIdAndDelete(req.params.id, (error, solicitud) => {
    if (error) {
      res.status(500).send(error);
    } else if (!solicitud) {
      res.status(404).send('Solicitud no encontrada');
    } else {
      res.send('Solicitud eliminada correctamente');
    }
  });
};
