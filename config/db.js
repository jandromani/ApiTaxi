const mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost:27017/taxiAPI';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión a MongoDB establecida');
  })
  .catch((error) => {
    console.error('Error al conectarse a MongoDB:', error);
  });

module.exports = mongoose.connection;

