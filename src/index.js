const express = require('express');
const conectarDB= require('../config/db');
const cors = require('cors');
const router = require('../routes/rutasCliente');
const routers = require('../routes/rutasServicio');


// Creamos la variable app
const app = express();
const port = 5000;

//Conexión bases de datos
conectarDB();
app.use(cors());
app.use(express.json());

//Ruta para consumir la API Cliente
app.use('/api/clientes', require('../routes/rutasCliente'));

//Ruta para consumir API Servicio
app.use('/api/servicios', require('../routes/rutasServicio'));

// Ruta verificar nuestro servidor en la web
app.get('/', (req, res) => {
    res.send("¡Hola! estamos conectados desde la web")
});


// Ruta de nuestro servidor local
app.listen(port, () => {
    console.log("El servidor esta conectado http://localhost:5000/");
}); 
// npm run start "Comando importante, no olvidar"