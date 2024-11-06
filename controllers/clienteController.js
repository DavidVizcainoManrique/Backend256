const Cliente = require('../models/Cliente');

// Función agregar clientes metodo Post

exports.agregarClientes = async (req, res) => {
    try {
        let clientes = new Cliente(req.body)
        await clientes.save();
        res.json(clientes);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar los clientes')
    }
}

//Función buscar clientes metodo Get

exports.buscarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find(); // Con el metodo find traemos los clientes
        res.json(clientes) //Aqui se piden los clientes con json y los trae a posmand

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al buscar los clientes')
    }
}

//Función para buscar un cliente metodo get

exports.mostrarCliente = async (req, res) => {
    try {
        let clientes = await Cliente.findById(req.params.id);//Se utiliza metodo findById para llevar la información  a la ruta
        if (!clientes) { //! para ver que sin un ID es diferente no envie la información
            res.status(404).send({ msg: "Cliente no encontrado con ese ID" })
        } else {
            res.json(clientes);
        }

    } catch (error) {
        res.status(500).send('Hubo un error al buscar el cliente');
    }
}

//Función modificar cliente metodo Patch

exports.modificarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar el cliente');
    }
}

//Función actualizar clientes metodo Put

exports.actualizarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!clientes) {
            res.status(404).send({ msg: "Cliente no encontrado con ese ID" });
        } else {
            res.json(clientes);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el cliente');
    }
}

//Función eliminar clientes

exports.eliminarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findById(req.params.id);
        if (!clientes) {
            res.status(404).send({ msg: "Cliente no encontrado con ese ID" });
        } else {
            await Cliente.findOneAndDelete({_id: req.params.id});
            res.json({msg: "Cliente eliminado"});
        }
      
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar un cliente');
    }
}