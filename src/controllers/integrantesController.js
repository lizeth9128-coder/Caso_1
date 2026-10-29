const data = require('../data/integrantes');

function listar(req, res) {
  res.json(data.obtenerTodos());
}

function obtener(req, res) {
  const id = parseInt(req.params.id);
  const integrante = data.obtenerPorId(id);
  if (!integrante) return res.status(404).json({ error: 'Integrante no encontrado' });
  res.json(integrante);
}

function crear(req, res) {
  const { nombre, correo } = req.body;
  if (!nombre || !correo) {
    return res.status(400).json({ error: 'nombre y correo son obligatorios' });
  }
  const nuevo = data.crear({ nombre, correo });
  res.status(201).json(nuevo);
}

function actualizar(req, res) {
  const id = parseInt(req.params.id);
  const actualizado = data.actualizar(id, req.body);
  if (!actualizado) return res.status(404).json({ error: 'Integrante no encontrado' });
  res.json(actualizado);
}

function eliminar(req, res) {
  const id = parseInt(req.params.id);
  const exito = data.eliminar(id);
  if (!exito) return res.status(404).json({ error: 'Integrante no encontrado' });
  res.status(204).send();
}

module.exports = { listar, obtener, crear, actualizar, eliminar };