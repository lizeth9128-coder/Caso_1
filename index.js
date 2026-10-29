const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API funcionando');
  });

const rutasTareas = require('./src/routes/tareas');
app.use('/tareas', rutasTareas);

const rutasIntegrantes = require('./src/routes/integrantes');
app.use('/integrantes', rutasIntegrantes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor activo en el puerto ' + PORT));
