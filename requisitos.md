
## Actores

- Integrante del equipo

## Requisitos funcionales

- RF1. El sistema debe permitir crear una tarea con los campos título, descripción, responsable, estado y fecha límite.
- RF2. El sistema debe permitir listar todas las tareas existentes.
- RF3. El sistema debe permitir consultar una tarea por su id.
- RF4. El sistema debe permitir editar los datos de una tarea.
- RF5. El sistema debe permitir eliminar una tarea.
- RF6. El sistema debe permitir asignar una tarea a un integrante existente.
- RF7. El sistema debe permitir cambiar el estado de una tarea (pendiente, en progreso, hecha).
- RF8. El sistema debe permitir filtrar las tareas por estado.
- RF9. El sistema debe permitir filtrar las tareas por responsable.
- RF10. El sistema debe permitir registrar integrantes con los campos nombre y correo.
- RF11. El sistema debe permitir listar, consultar, editar y eliminar integrantes.

## Requisitos no funcionales

- RNF1. La API debe responder en formato JSON.
- RNF2. Los campos obligatorios deben validarse antes de guardar.
- RNF3. La aplicación debe ser accesible por navegador desde cualquier equipo.
- RNF4. El estado de una tarea solo puede ser pendiente, en progreso o hecha.
- RNF5. Si un recurso no existe, la API debe responder con código 404 y un mensaje claro.