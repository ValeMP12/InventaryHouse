import { inventarioModel } from "../models/inventarioModel.js";

const getAll = async (req, res) => {
    try {
        const response = await inventarioModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Controlador para buscar un inventario por su ID
const getInventarioId = async (req, res) => {
    const { id } = req.params;
    try {
        const inventario = await inventarioModel.getInventarioById(id);
        if (inventario) {
            res.json(inventario);
        } else {
            res.status(404).json({ message: 'Inventario no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar el inventario por su ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createInventario = async (req, res) => {
    const { codigo, existencia, producto, empresa } = req.body;

    // Validaciones básicas
    if (typeof codigo !== 'string' || codigo.trim() === '') {
        return res.status(400).json({ message: 'Código inválido' });
    }
    if (!Number.isInteger(existencia) || existencia < 0) {
        return res.status(400).json({ message: 'Existencia inválida' });
    }
    if (typeof producto !== 'string' || producto.trim() === '') {
        return res.status(400).json({ message: 'Producto inválido' });
    }
    if (typeof empresa !== 'string' || empresa.trim() === '') {
        return res.status(400).json({ message: 'Empresa inválida' });
    }

    try {
        const newInventario = await inventarioModel.createInventario(codigo, existencia, producto, empresa);
        res.status(201).json(newInventario);
    } catch (error) {
        console.error('Error al registrar el inventario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateInventario = async (req, res) => {
    const { id } = req.params;
    const { codigo, existencia, producto, empresa } = req.body;

    // Validaciones básicas
    if (typeof codigo !== 'string' || codigo.trim() === '') {
        return res.status(400).json({ message: 'Código inválido' });
    }
    if (!Number.isInteger(existencia) || existencia < 0) {
        return res.status(400).json({ message: 'Existencia inválida' });
    }
    if (typeof producto !== 'string' || producto.trim() === '') {
        return res.status(400).json({ message: 'Producto inválido' });
    }
    if (typeof empresa !== 'string' || empresa.trim() === '') {
        return res.status(400).json({ message: 'Empresa inválida' });
    }

    try {
        const updatedInventario = await inventarioModel.updateInventario(id, codigo, existencia, producto, empresa);
        if (updatedInventario) {
            res.json(updatedInventario);
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
        const deletedInventario = await inventarioModel.deleteInventario(id);
        if (deletedInventario) {
            res.json({ message: 'Inventario eliminado correctamente' });
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
            res.status(404).json({ message: 'Inventario no encontrado' });
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
