// api/index.js
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/saludar', (req, res) => {
  const { nombre } = req.body;
  if (!nombre) {
    return res.status(400).json({ error: 'Nombre es requerido' });
  }
  res.json({ mensaje: `Hola, ${nombre}!` });
});

module.exports = app;