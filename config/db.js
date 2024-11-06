// Creamos conexión a la base de datos
const mongoose = require('mongoose');
require('dotenv').config(); // Aqui llamamos a dep: dotenv para conectar la base de datos

//Configuramos conexión con Mongo
const conectarDB = () => {
    mongoose
    .connect(process.env.DB_MONGO) 
    .then(() => console.log("Estamos conectados con MongoDB"))
    .catch((err) => console.log(err)); // Error en caso falle la conexión
}

module.exports = conectarDB; //Aqui exportamos todo la variable conectarDB