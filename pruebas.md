# Tabla de pruebas

Pruebas manuales hechas con curl sobre http://localhost:3000 (StackBlitz).

| # | Endpoint | Entrada | Resultado esperado | Resultado obtenido | ¿Pasó? |
|---|----------|---------|--------------------|--------------------|--------|
| 1 | POST /tareas | titulo "Mi primera tarea" y responsable "Ana" | Se crea la tarea con id 1 y estado pendiente | Devolvió la tarea creada con id 1 y estado "pendiente" | SÍ |
| 2 | POST /tareas | solo titulo, sin responsable | Error 400 con mensaje claro | {"error":"titulo y responsable son obligatorios"} | SÍ |
| 3 | GET /tareas | ninguna | Lista con las tareas guardadas | Devolvió la lista con "Mi primera tarea" | SÍ |
| 4 | GET /tareas/1 | id existente | La tarea con id 1 | Devolvió solo esa tarea | SÍ |
| 5 | GET /tareas/999 | id inexistente | Error 404 | {"error":"Tarea no encontrada"} | SI |
| 6 | PUT /tareas/1 | estado "en progreso" | Tarea actualizada | Devolvió la tarea con estado "en progreso" | SI |
| 7 | PUT /tareas/1 | estado "inventado" | Error 400 por estado no válido | {"error":"estado debe ser pendiente, en progreso o hecha"} | SI |
| 8 | PUT /tareas/999 | id inexistente | Error 404 | {"error":"Tarea no encontrada"} | SI |
| 9 | GET /tareas?estado=en progreso | filtro por estado | Solo tareas "en progreso" | Devolvió la tarea en progreso | SI |
| 10 | GET /tareas?estado=hecha | estado sin tareas | Lista vacía | [] | SI| 
| 11 | GET /tareas?responsable=Ana | filtro por responsable | Solo tareas de Ana | Devolvió la tarea de Ana | SI |
| 12 | DELETE /tareas/1 | id existente | Código 204 sin contenido | HTTP/1.1 204 No Content | SI |
| 13 | DELETE /tareas/999 | id inexistente | Error 404 | {"error":"Tarea no encontrada"} | SI |


## Pruebas contra la URL pública (Render)

Pruebas hechas sobre https://caso1-asignacion-de-tareas.onrender.com

| # | Endpoint | Entrada | Resultado esperado | Resultado obtenido | ¿Pasó? |
|---|----------|---------|--------------------|--------------------|--------|
| R1 | GET /tareas | ninguna | Lista vacía al inicio | Devolvió [] | Sí |
| R2 | POST /tareas | titulo "Prueba Render" y responsable "Ana" | Se crea la tarea con id 1 y estado pendiente | Devolvió la tarea con id 1 y estado "pendiente" | Sí |
| R3 | GET /tareas/999 | id inexistente | Error 404 con mensaje claro | {"error":"Tarea no encontrada"} | Sí |
