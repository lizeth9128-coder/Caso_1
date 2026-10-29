# Tabla de pruebas

Pruebas manuales hechas con curl sobre http://localhost:3000 (StackBlitz).

Pruebas manuales hechas con curl sobre http://localhost:3000 (StackBlitz).
Nota: las pruebas 1 a 13 se hicieron antes de agregar la validación del responsable. Con la versión final, el integrante "Nombre de ANA " debe registrarse primero (ver pruebas 14 a 21).

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


## Pruebas de integrantes y validación del responsable

| # | Endpoint | Entrada | Resultado esperado | Resultado obtenido | ¿Pasó? |
|---|----------|---------|--------------------|--------------------|--------|
| 14 | POST /integrantes | nombre "Ana" y correo "ana@correo.com" | Se crea el integrante con id 1 | Devolvió el integrante con id 1 | Sí |
| 15 | POST /integrantes | solo nombre, sin correo | Error 400 con mensaje claro | {"error":"nombre y correo son obligatorios"} | Sí |
| 16 | GET /integrantes/999 | id inexistente | Error 404 | {"error":"Integrante no encontrado"} | Sí |
| 17 | POST /tareas | responsable "Nadie" (no registrado) | Error 400 | {"error":"El responsable no es un integrante existente"} | Sí |
| 18 | POST /tareas | titulo, responsable "Ana" y fechaLimite "2026-11-30" | Se crea la tarea con la fecha límite | Devolvió la tarea con fechaLimite | Sí |
| 19 | PUT /tareas/1 | responsable "Nadie" | Error 400 | {"error":"El responsable no es un integrante existente"} | Sí |
| 20 | PUT /integrantes/1 | correo "nuevo@correo.com" | Integrante con el correo cambiado | Devolvió el integrante actualizado | Sí |
| 21 | DELETE /integrantes/1 | id existente | Código 204 sin contenido | 204 No Content | Sí |