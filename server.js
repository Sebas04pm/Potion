const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Configuración de conexión a la base de datos de MongoDB
mongoose.connect('mongodb://localhost:27017/Pociones', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conexión a la base de datos establecida.');
})
.catch((error) => {
  console.error('Error al conectar a la base de datos:', error);
});

// Definir modelos de datos y rutas del backend aquí

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor backend en funcionamiento en http://localhost:${PORT}`);
});

const potionRoutes = require('./routes/potions');

// ...

// Configurar las rutas del backend
app.use('/api/potions', potionRoutes);

// ...

