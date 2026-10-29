# Gestor de tareas en equipo

**Proyecto integrador - Programación Aplicada**
**Caso asignado:** Caso 1 · Gestor de tareas 

## Integrantes
- Ivan David Mateus
- Lizeth Dahiana Cardona

## Descripción
API REST hecha con Node.js y Express para que un equipo organice sus tareas: crear, listar, editar y eliminar tareas, asignarlas a un responsable, cambiar su estado (pendiente, en progreso, hecha) y filtrarlas por estado o responsable.

## Enlaces
- URL pública (Render): https://caso1-asignacion-de-tareas.onrender.com
- Repositorio (GitHub): https://github.com/lizeth9128-coder/Caso_1

## Endpoints

| Método | Ruta | Qué hace |
|--------|------|----------|
| GET | /tareas | Lista todas las tareas (admite ?estado= y ?responsable=) |
| GET | /tareas/:id | Consulta una tarea por id |
| POST | /tareas | Crea una tarea nueva (el responsable debe ser un integrante existente) |
| PUT | /tareas/:id | Edita una tarea (incluye cambiar el estado) |
| DELETE | /tareas/:id | Elimina una tarea |
| GET | /integrantes | Lista todos los integrantes |
| GET | /integrantes/:id | Consulta un integrante por id |
| POST | /integrantes | Registra un integrante nuevo |
| PUT | /integrantes/:id | Edita un integrante |
| DELETE | /integrantes/:id | Elimina un integrante |

## Cómo probar cada endpoint

Listar todas:
curl https://caso1-asignacion-de-tareas.onrender.com/tareas

Filtrar por estado:
curl "https://caso1-asignacion-de-tareas.onrender.com/tareas?estado=pendiente"

Filtrar por responsable:
curl "https://caso1-asignacion-de-tareas.onrender.com/tareas?responsable=Ana"

Consultar una tarea:
curl https://caso1-asignacion-de-tareas.onrender.com/tareas/1

Crear una tarea:
curl -X POST https://caso1-asignacion-de-tareas.onrender.com/tareas -H "Content-Type: application/json" -d '{"titulo":"Mi tarea","responsable":"Ana"}'

Editar una tarea:
curl -X PUT https://caso1-asignacion-de-tareas.onrender.com/tareas/1 -H "Content-Type: application/json" -d '{"estado":"en progreso"}'

Eliminar una tarea:
curl -X DELETE https://caso1-asignacion-de-tareas.onrender.com/tareas/1

Nota: para crear una tarea, primero hay que registrar al responsable en /integrantes (el nombre debe coincidir).

Crear un integrante (hacerlo antes de crear tareas):
```bash
curl -X POST https://caso1-asignacion-de-tareas.onrender.com/integrantes -H "Content-Type: application/json" -d '{"nombre":"Ana","correo":"ana@correo.com"}'
```

Listar integrantes:
```bash
curl https://caso1-asignacion-de-tareas.onrender.com/integrantes
```

Consultar, editar y eliminar un integrante:
```bash
curl https://caso1-asignacion-de-tareas.onrender.com/integrantes/1
curl -X PUT https://caso1-asignacion-de-tareas.onrender.com/integrantes/1 -H "Content-Type: application/json" -d '{"correo":"nuevo@correo.com"}'
curl -X DELETE https://caso1-asignacion-de-tareas.onrender.com/integrantes/1
```




## Nota
El servicio está en el plan gratuito de Render, por lo que la primera petición puede tardar hasta 50 segundos si estuvo inactivo. Los datos se guardan en memoria y se reinician cuando el servicio se reinicia.




# Product Backlog

**HU1 (RF1).** 
- Como integrante del equipo, quiero crear una tarea con título, descripción, responsable, estado y fecha límite, para que quede guardada y disponible para consultarla después.
- Criterio de aceptación: al enviar POST /tareas con los datos requeridos, la API responde 201 y la tarea aparece luego en GET /tareas.

**HU2 (RF2).** 
- Como integrante del equipo, quiero listar todas las tareas, para saber qué hay pendiente.
- Criterio de aceptación: GET /tareas devuelve la lista de tareas en JSON.

**HU3 (RF3).** 
- Como integrante del equipo, quiero editar los datos de una tarea, para mantenerla actualizada.
- Criterio de aceptación: al enviar PUT /tareas/:id con nuevos datos, los cambios se ven luego en GET /tareas.

**HU4 (RF4).** 
- Como integrante del equipo, quiero eliminar una tarea, para quitar las que ya no sirven.
- Criterio de aceptación: al enviar DELETE /tareas/:id, la tarea deja de aparecer en GET /tareas.

**HU5 (RF5).** 
- Como integrante del equipo, quiero asignar una tarea a un integrante existente, para saber quién es responsable.
- Criterio de aceptación: una tarea solo se puede asignar a un integrante que exista.

**HU6 (RF6).** 
- Como integrante del equipo, quiero cambiar el estado de una tarea, para reflejar su avance.
- Criterio de aceptación: el estado solo acepta pendiente, en progreso o hecha.

**HU7 (RF7).** 
- Como integrante del equipo, quiero filtrar las tareas por estado, para ver solo las que me interesan.
- Criterio de aceptación: GET /tareas?estado=pendiente devuelve solo las tareas con ese estado.

**HU8 (RF8).** 
- Como integrante del equipo, quiero filtrar las tareas por responsable, para ver lo que le toca a cada persona.
- Criterio de aceptación: GET /tareas?responsable=Nombre devuelve solo las tareas de ese integrante.

**HU9 (RF9).** 
- Como integrante del equipo, quiero registrar integrantes con nombre y correo, para poder asignarles tareas.
- Criterio de aceptación: al enviar POST /integrantes con nombre y correo, la API responde 201 y el integrante aparece en GET /integrantes.



---

# División en sprints para las historias de usuario

## Sprint 1 (Semana 2): funcionalidades base
- HU1: Crear tarea
- HU2: Listar tareas
- HU9: Registrar integrantes

## Sprint 2 (Semana 3): funcionalidades restantes
- HU3: Editar tarea
- HU4: Eliminar tarea
- HU5: Asignar tarea a un integrante
- HU6: Cambiar estado de una tarea

## Sprint 3 (Semana 4): ajustes, pruebas y despliegue
- HU7: Filtrar tareas por estado
- HU8: Filtrar tareas por responsable
- Pruebas y despliegue


# Tablero Kanban

| Por hacer                     | En progreso | Hecho |
|                               |             |       |
| HU1: Crear tarea              |             |       |
| HU2: Listar tareas            |             |       |
| HU3: Editar tarea             |             |       |
| HU4: Eliminar tarea           |             |       |
| HU5: Asignar tarea            |             |       |
| HU6: Cambiar estado           |             |       |
| HU7: Filtrar por estado       |             |       |
| HU8: Filtrar por responsable  |             |       |
| HU9: Registrar integrantes    |             |       |


| Por hacer | En progreso | Hecho                     |
|-----------|-------------|-------                    |
|           |             | HU1: Crear tarea          |
|           |             | HU2: Listar tareas        |
|           |             | HU3: Editar tarea         |
|           |             | HU4: Eliminar tarea       |
|           |             | HU5: Asignar tarea        |
|           |             | HU6: Cambiar estado       |
|           |             | HU7: Filtrar por estado   |
|           |             | HU8: Filtrar por responsable |
|           |             | HU9: Registrar integrantes|
