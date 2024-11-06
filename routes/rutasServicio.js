const express = require('express');
const router = express.Router();
const servicioController = require('../controllers/servicioController');

// Estas son las rutas de nuestro crud

router.post('/', servicioController.agregarServicio);
router.get('/', servicioController.buscarServicio);
router.get('/:id', servicioController.mostrarServicio);
router.put('/:id', servicioController.actualizarServicio);
router.delete('/:id', servicioController.eliminarServicio);

module.exports = router; 