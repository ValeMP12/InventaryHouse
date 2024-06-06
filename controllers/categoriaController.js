import { categoriaModel } from "../models/categoriaModel.js";

const getAll = async (req, res) => {
    try {
        const response = await categoriaModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Controlador para buscar una categoria por su ID
const getcategoriaId = async (req, res) => {
    const { id } = req.params;
    try {
        const categoria = await categoriaModel.getcategoriaById(id);
        if (categoria) {
            res.json(categoria);
        } else {
            res.status(404).json({ message: 'Categoria no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar la categoria por su ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createcategoria = async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
        const newcategoria = await categoriaModel.createcategoria(nombre, descripcion);
        res.status(201).json(newcategoria);
    } catch (error) {
        console.error('Error al registrar la categoria:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updatecategoria = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    try {
        const updatedcategoria = await categoriaModel.updatecategoria(id, nombre, descripcion);
        if (updatedcategoria) {
            res.json(updatedcategoria);
        } else {
            res.status(404).json({ message: 'Categoria no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar la categoria por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deletecategoria = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedcategoria = await categoriaModel.deletecategoria(id);
        if (deletedcategoria) {
            res.json({ message: 'Categoria eliminada correctamente' });
        } else {
            res.status(404).json({ message: 'Categoria no encontrada' });
        }
    } catch (error) {
        console.error('Error al eliminar la categoria por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Controlador para buscar un producto de una categoria por su ID
const getProductoByIdcategoria = async (req, res) => {
    const { id } = req.params;
    try {
        const categoria = await categoriaModel.getProductoByIdcategoria(id);
        if (categoria) {
            res.json(categoria);
        } else {
            res.status(404).json({ message: 'Categoria no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar la categoria por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const categoriaController = {
    getAll,
    getcategoriaId,
    createcategoria,
    updatecategoria,
    deletecategoria,
    getProductoByIdcategoria,
};
