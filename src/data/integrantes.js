let integrantes = [];
let siguienteId = 1;

function obtenerTodos() {
  return integrantes;
}

function obtenerPorId(id) {
  return integrantes.find(i => i.id === id);
}

function crear(datos) {
  const nuevo = { id: siguienteId++, ...datos };
  integrantes.push(nuevo);
  return nuevo;
}

function actualizar(id, datos) {
  const integrante = obtenerPorId(id);
  if (!integrante) return null;
  Object.assign(integrante, datos);
  return integrante;
}

function eliminar(id) {
  const index = integrantes.findIndex(i => i.id === id);
  if (index === -1) return false;
  integrantes.splice(index, 1);
  return true;
}

module.exports = { obtenerTodos, obtenerPorId, crear, actualizar, eliminar };