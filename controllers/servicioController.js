const Servicio = require('../models/Servicio');

// Función agregar  metodo Post

exports.agregarServicio = async (req, res) => {
    try {
        let servicios = new Servicio(req.body)
        await servicios.save(); // Se usa metodo "Save" para crear servicios 
        res.json(servicios);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar el servicio')
    }
}

// Función buscar todos los clientes "GET"

exports.buscarServicio = async (req, res) => {
    try {
        const servicios = await Servicio.find(); //Se usa metodo "find" para buscar todos los clientes de la base de datos
        res.json(servicios);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al buscar los servicios')
    }
}

//Función para buscar un cliente metodo get

exports.mostrarServicio = async (req, res) => {
    try {
        let servicios = await Servicio.findById(req.params.id);//Se utiliza metodo findById para llevar la información  a la ruta
        if (!servicios) { //! para ver que sin un ID es diferente no envie la información
            res.status(404).send({ msg: "Servicio no encontrado con ese ID" })
        } else {
            res.json(servicios);
        }

    } catch (error) {
        res.status(500).send('Hubo un error al buscar el servicio');
    }
}


//Función actualizar o modificar clientes metodo Put

exports.actualizarServicio = async (req, res) => {
    try {
        const servicios = await Servicio.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!servicios) {
            res.status(404).send({ msg: "Servicio actualizado correctamente" });
        } else {
            res.json(servicios);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el servicio');
    }
}

//Función pata eliminar clientes metodo Delete

exports.eliminarServicio = async (req, res) => {
    try {
        const servicios = await Servicio.findById(req.params.id);
        if (!servicios) {
            res.status(404).send({ msg: "Servicio no encontrado con ese ID" });
        } else {
            await Servicio.findOneAndDelete({_id: req.params.id});
            res.json({msg: "Servicio eliminado"});
        }
      
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar un cliente');
    }
}

