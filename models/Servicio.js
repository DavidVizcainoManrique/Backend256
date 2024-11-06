//Trabajamos con el modelo, para esto llamamos de nuevo el modulo "Mongoose"
const mongoose = require('mongoose');

//El modelo que se cree aca debe ser igual al de la base de datos
const servicioSchema = mongoose.Schema({ //Función para crear un esquema y llamar una función para crear clientes

    tipoServicio: {
        type: String,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    unidadArea: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    producto: {
        type: String,
        required: true
    },
    idServicio: {
        type: Number,
        required: true
    },
    dirServicio: {
        type: String,
        required: true
    },
    fechaServicio: {
        type: Date,
        required: true
    },
   
    
},{versionkey:false});

module.exports = mongoose.model('Servicio', servicioSchema);//Aqui exportamos el modulo