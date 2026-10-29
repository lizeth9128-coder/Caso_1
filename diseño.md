
# Diseño

## 1. Modelo de datos

Entidad: Tarea
- id            (número, autogenerado)
- titulo        (texto, obligatorio)
- descripcion   (texto, opcional)
- responsable   (texto, nombre de un integrante existente, obligatorio)
- estado        (texto: "pendiente" | "en progreso" | "hecha", obligatorio; por defecto "pendiente")
- fechaLimite   (texto con fecha, opcional)

Entidad: Integrante
- id            (número, autogenerado)
- nombre        (texto, obligatorio)
- correo        (texto, obligatorio)

## 2. Rutas de la API

| Método | Ruta                     | Qué hace                                              |
|--------|--------------------------|-------------------------------------------------------|
| GET    | /tareas                  | Lista todas las tareas                                |
| GET    | /tareas/:id              | Consulta una tarea por id                             |
| POST   | /tareas                  | Crea una tarea nueva                                  |
| PUT    | /tareas/:id              | Edita una tarea (incluye reasignarla y cambiar estado)|
| DELETE | /tareas/:id              | Elimina una tarea                                     |
| GET    | /tareas?estado=pendiente | Filtra las tareas por estado                          |
| GET    | /tareas?responsable=Iván | Filtra las tareas por responsable                     |
| GET    | /integrantes             | Lista todos los integrantes                           |
| GET    | /integrantes/:id         | Consulta un integrante por id                         |
| POST   | /integrantes             | Registra un integrante nuevo                          |
| PUT    | /integrantes/:id         | Edita un integrante existente                         |
| DELETE | /integrantes/:id         | Elimina un integrante                                 |

## 3. Reglas de negocio

- Una tarea solo puede asignarse a un responsable que exista en /integrantes.
- El estado de una tarea solo puede ser: pendiente, en progreso o hecha.
- titulo y responsable son obligatorios al crear una tarea.
- nombre y correo son obligatorios al crear un integrante.
- Si un id no existe, la API responde 404.

## 4. Estructura de carpetas del proyecto

/proyecto
  /src
    /routes       → define las rutas y qué función atiende cada una
    /controllers  → la lógica de cada acción (crear, listar, editar...)
    /data         → donde se guarda la información (arreglo en memoria)
  index.js        → arranca el servidor Express
  package.json
  requisitos.md
  diseño.md
  historias.txt
  pruebas.md
  README.md