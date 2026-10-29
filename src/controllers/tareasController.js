const ESTADOS_VALIDOS = ['pendiente', 'en progreso', 'hecha'];
const data = require('../data/tareas');

function listar(req, res) {
  let resultado = data.obtenerTodas();
  const { estado, responsable } = req.query;
  if (estado) resultado = resultado.filter(t => t.estado === estado);
  if (responsable) resultado = resultado.filter(t => t.responsable === responsable);
  res.json(resultado);
}

function obtener(req, res) {
  const id = parseInt(req.params.id);
  const tarea = data.obtenerPorId(id);
  if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.json(tarea);
}

function crear(req, res) {
  const { titulo, responsable } = req.body;
  if (!titulo || !responsable) {
    return res
      .status(400)
      .json({ error: 'titulo y responsable son obligatorios' });
  }
  const nueva = data.crear({
    titulo,
    descripcion: req.body.descripcion || '',
    responsable,
    estado: 'pendiente',
  });
  res.status(201).json(nueva);
}

function actualizar(req, res) {
  const id = parseInt(req.params.id);
  const { estado } = req.body;
  if (estado && !ESTADOS_VALIDOS.includes(estado)) {
    return res.status(400).json({ error: 'estado debe ser pendiente, en progreso o hecha' });
  }
  const actualizada = data.actualizar(id, req.body);
  if (!actualizada) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.json(actualizada);
}

function eliminar(req, res) {
  const id = parseInt(req.params.id);
  const exito = data.eliminar(id);
  if (!exito) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.status(204).send();
}

module.exports = { listar, obtener, crear, actualizar, eliminar };
