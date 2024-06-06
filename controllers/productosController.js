import { productosModel } from "../models/productosModel.js";

const getAll = async (req, res) => {
    try {
        const response = await productosModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getProductosId = async (req, res) => {
    const { id } = req.params;
    try {
        const productos = await productosModel.getProductosById(id);
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
    const { Cant, Codigo, Producto, Id_prov, Categoria, precio_unit, precio_vent } = req.body;
    
    // Validaciones básicas
    if (!Number.isInteger(Cant) || Cant < 0) {
        return res.status(400).json({ message: 'Cantidad inválida' });
    }
    if (typeof Codigo !== 'string' || Codigo.trim() === '') {
        return res.status(400).json({ message: 'Código inválido' });
    }
    if (typeof Producto !== 'string' || Producto.trim() === '') {
        return res.status(400).json({ message: 'Producto inválido' });
    }
    if (!Number.isInteger(Id_prov) || Id_prov < 0) {
        return res.status(400).json({ message: 'Proveedor inválido' });
    }
    if (typeof Categoria !== 'string' || Categoria.trim() === '') {
        return res.status(400).json({ message: 'Categoría inválida' });
    }
    if (typeof precio_unit !== 'number' || precio_unit <= 0) {
        return res.status(400).json({ message: 'Precio unitario inválido' });
    }
    if (typeof precio_vent !== 'number' || precio_vent <= 0) {
        return res.status(400).json({ message: 'Precio de venta inválido' });
    }

    try {
        const newProducto = await productosModel.createProducto(Cant, Codigo, Producto, Id_prov, Categoria, precio_unit, precio_vent);
        res.status(201).json(newProducto);
    } catch (error) {
        console.error('Error al registrar el producto:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateProducto = async (req, res) => {
    const { id } = req.params;
    const { Cant, Codigo, Producto, Id_prov, Categoria, precio_unit, precio_vent } = req.body;

    // Validaciones básicas
    if (!Number.isInteger(Cant) || Cant < 0) {
        return res.status(400).json({ message: 'Cantidad inválida' });
    }
    if (typeof Codigo !== 'string' || Codigo.trim() === '') {
        return res.status(400).json({ message: 'Código inválido' });
    }
    if (typeof Producto !== 'string' || Producto.trim() === '') {
        return res.status(400).json({ message: 'Producto inválido' });
    }
    if (!Number.isInteger(Id_prov) || Id_prov < 0) {
        return res.status(400).json({ message: 'Proveedor inválido' });
    }
    if (typeof Categoria !== 'string' || Categoria.trim() === '') {
        return res.status(400).json({ message: 'Categoría inválida' });
    }
    if (typeof precio_unit !== 'number' || precio_unit <= 0) {
        return res.status(400).json({ message: 'Precio unitario inválido' });
    }
    if (typeof precio_vent !== 'number' || precio_vent <= 0) {
        return res.status(400).json({ message: 'Precio de venta inválido' });
    }

    try {
        const updatedProducto = await productosModel.updateProducto(id, Cant, Codigo, Producto, Id_prov, Categoria, precio_unit, precio_vent);
        if (updatedProducto) {
            res.json(updatedProducto);
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
        const deletedProducto = await productosModel.deleteProducto(id);
        if (deletedProducto) {
            res.json({ message: 'Producto eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar Producto por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

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
