const data = require('../data/integrantes');

function listar(req, res) {
  res.json(data.obtenerTodos());
}

function crear(req, res) {
  const { nombre, correo } = req.body;
  if (!nombre || !correo) {
    return res.status(400).json({ error: 'nombre y correo son obligatorios' });
  }
  if (data.obtenerPorNombre(nombre)) {
    return res.status(400).json({ error: 'Ya existe un integrante con ese nombre' });
  }
  const nuevo = data.crear({ nombre, correo });
  res.status(201).json(nuevo);
}

module.exports = { listar, crear };