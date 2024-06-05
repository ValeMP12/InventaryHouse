import { productosModel } from "../models/productosModel.js";

const getAll = async (req,res) => {
    try {
        const response = await productosModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

// Controlador para buscar un producto por su ID
const getProductosId = async (req, res) => {
    const { id } = req.params;
    try {
        const productos = await productosModel.getproductosById(id);
        if (productos) {
            res.json(productos);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar el producto por su ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createProducto = async (req, res) => {
    const {id_producto, cant, Codigo_id, producto, id_prov,categoria,precio_unit,precio_vent } = req.body;
    try {
        const newProducto = await productosModel.createProducto(id_producto, cant, Codigo_id, producto, id_prov,categoria,precio_unit,precio_vent );
        res.status(201).json(newProducto);
    } catch (error) {
        console.error('Error al registrar el producto:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateProducto = async (req, res) => {
    const { id } = req.params;
    const { id_producto, cant, Codigo_id, producto, id_prov,categoria,precio_unit,precio_vent } = req.body;
    try {
        const updateProducto = await productosModel.updateProducto(id_producto, cant, Codigo_id, producto, id_prov,categoria,precio_unit,precio_vent);
        if (updateProducto) {
            res.json(updateProducto);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar el producto por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteProducto = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteProducto = await productosModel.deleteProducto(id);
        if (deleteProducto) {
            res.json({ message: 'Producto eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar Producto por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Controlador para buscar un proveedor de un producto por su ID
const getProveedorByIdProducto = async (req, res) => {
    const { id } = req.params;
    try {
        const productos = await productosModel.getProveedorByIdProducto(id);
        if (productos) {
            res.json(productos);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar el producto por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const productosController = {
    getAll,
    getProductosId, 
    createProducto,
    updateProducto,
    deleteProducto,
    getProveedorByIdProducto
};