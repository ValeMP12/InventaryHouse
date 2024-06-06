import { ClientesModel } from "../models/ClientesModel.js";

const getAll = async (req, res) => {
    try {
        const response = await ClientesModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Controlador para buscar un cliente por su ID
const getClienteId = async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await ClientesModel.getClienteById(id);
        if (cliente) {
            res.json(cliente);
        } else {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar el cliente por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createCliente = async (req, res) => {
    const { nombre, fecha_pago, saldo } = req.body;
    try {
        const newCliente = await ClientesModel.createCliente(nombre, fecha_pago, saldo);
        res.status(201).json(newCliente);
    } catch (error) {
        console.error('Error al registrar el cliente:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateCliente = async (req, res) => {
    const { id } = req.params;
    const { nombre, fecha_pago, saldo } = req.body;
    try {
        const updatedCliente = await ClientesModel.updateCliente(id, nombre, fecha_pago, saldo);
        if (updatedCliente) {
            res.json(updatedCliente);
        } else {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar cliente por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCliente = await ClientesModel.deleteCliente(id);
        if (deletedCliente) {
            res.json({ message: 'Cliente eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar cliente por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Controlador para buscar un producto de un cliente por su ID
const getProductoByIdCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await ClientesModel.getProductoByIdCliente(id);
        if (cliente) {
            res.json(cliente);
        } else {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar el cliente por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const ClientesController = {
    getAll,
    getClienteId,
    createCliente,
    updateCliente,
    deleteCliente,
    getProductoByIdCliente,
};
