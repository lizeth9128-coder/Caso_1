let integrantes = [];
let siguienteId = 1;

function obtenerTodos() {
  return integrantes;
}

function obtenerPorNombre(nombre) {
  return integrantes.find(i => i.nombre.toLowerCase() === nombre.toLowerCase());
}

function crear(datos) {
  const nuevo = { id: siguienteId++, ...datos };
  integrantes.push(nuevo);
  return nuevo;
}

module.exports = { obtenerTodos, obtenerPorNombre, crear };