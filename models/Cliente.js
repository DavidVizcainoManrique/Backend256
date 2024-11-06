//Trabajamos con el modelo, para esto llamamos de nuevo el modulo "Mongoose"
const mongoose = require('mongoose');

//El modelo que se cree aca debe ser igual al de la base de datos
const clienteSchema = mongoose.Schema({ //Función para crear un esquema y llamar una función para crear clientes

    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    documento: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: String,   
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
},{versionkey:false});

module.exports = mongoose.model('Cliente', clienteSchema);//Aqui exportamos el modulo
