import { proveedoresModel } from "../models/proveedoresModel.js";

const getAll = async (req, res) => {
    try {
        const response = await proveedoresModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Controlador para buscar un proveedor por su ID
const getProveedoresId = async (req, res) => {
    const { id } = req.params;
    try {
        const proveedor = await proveedoresModel.getProveedorById(id);
        if (proveedor) {
            res.json(proveedor);
        } else {
            res.status(404).json({ message: 'Proveedor no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar el proveedor por su ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createProveedor = async (req, res) => {
    const { nom_empresa, nom_proveedor, dias, telefono, direccion } = req.body;
    try {
        const newProveedor = await proveedoresModel.createProveedor(nom_empresa, nom_proveedor, dias, telefono, direccion);
        res.status(201).json(newProveedor);
    } catch (error) {
        console.error('Error al registrar el proveedor:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateProveedor = async (req, res) => {
    const { id } = req.params;
    const { nom_empresa, nom_proveedor, dias, telefono, direccion } = req.body;
    try {
        const updateProveedor = await proveedoresModel.updateProveedor(id, nom_empresa, nom_proveedor, dias, telefono, direccion);
        if (updateProveedor) {
            res.json(updateProveedor);
        } else {
            res.status(404).json({ message: 'Proveedor no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar el proveedor por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteProveedor = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteProveedor = await proveedoresModel.deleteProveedor(id);
        if (deleteProveedor) {
            res.json({ message: 'Proveedor eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Proveedor no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar proveedor por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Controlador para buscar un producto de un proveedor por su ID
const getProductoByIdProveedor = async (req, res) => {
    const { id } = req.params;
    try {
        const proveedor = await proveedoresModel.getProductoByIdProveedor(id);
        if (proveedor) {
            res.json(proveedor);
        } else {
            res.status(404).json({ message: 'Proveedor no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar el proveedor por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const proveedoresController = {
    getAll,
    getProveedoresId, 
    createProveedor,
    updateProveedor,
    deleteProveedor,
    getProductoByIdProveedor
};
