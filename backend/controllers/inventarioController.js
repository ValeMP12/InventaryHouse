import { inventarioModel } from "../models/inventarioModel.js";

const getAll = async (req,res) => {
    try {
        const response = await inventarioModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

// Controlador para buscar un inventario por su ID
const getInventarioId = async (req, res) => {
    const { id } = req.params;
    try {
        const inventario = await inventarioModel.getInventarioId(id);
        if (inventario) {
            res.json(inventario);
        } else {
            res.status(404).json({ message: 'invetario no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar el inventario por su ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createInventario = async (req, res) => {
    const {id_inventario, codigo, existencia, producto, empresa } = req.body;
    try {
        const newInventario = await inventarioModel.createInventario(id_inventario, codigo, existencia, producto, empresa  );
        res.status(201).json(newInventario);
    } catch (error) {
        console.error('Error al registrar el inventario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateInventario = async (req, res) => {
    const { id } = req.params;
    const {id_inventario, codigo, existencia, producto, empresa } = req.body;
    try {
        const updateInventario = await inventarioModel.updateInventario(id_inventario, codigo, existencia, producto, empresa );
        if (updateInventario) {
            res.json(updateInventario);
        } else {
            res.status(404).json({ message: 'Inventario no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar el inventario por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteInventario = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteInventario = await inventarioModel.deleteInventario(id);
        if (deleteInventario) {
            res.json({ message: 'inventario eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Inventario no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar inventario por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Controlador para buscar un producto de un inventario por su ID
const getProductoByIdInventario = async (req, res) => {
    const { id } = req.params;
    try {
        const inventario = await inventarioModel.getProductoByIdInventario(id);
        if (inventario) {
            res.json(inventario);
        } else {
            res.status(404).json({ message: 'inventario no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar el inventario por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const inventarioController = {
    getAll,
    getInventarioId, 
    createInventario,
    updateInventario,
    deleteInventario,
    getProductoByIdInventario
};