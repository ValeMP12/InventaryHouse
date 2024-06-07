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
const getCategoriaById = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await categoriaModel.getCategoriaById(id);
    if (categoria) {
      res.json(categoria);
    } else {
      res.status(404).json({ message: 'Categoria no encontrada' });
    }
  } catch (error) {
    console.error('Error al buscar la categoria por su ID:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const createCategoria = async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    const newCategoria = await categoriaModel.createCategoria(nombre, descripcion);
    res.status(201).json(newCategoria);
  } catch (error) {
    console.error('Error al registrar la categoria:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const updateCategoria = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  try {
    const updatedCategoria = await categoriaModel.updateCategoria(id, nombre, descripcion);
    if (updatedCategoria) {
      res.json(updatedCategoria);
    } else {
      res.status(404).json({ message: 'Categoria no encontrada' });
    }
  } catch (error) {
    console.error('Error al actualizar la categoria por ID:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const deleteCategoria = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategoria = await categoriaModel.deleteCategoria(id);
    if (deletedCategoria) {
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
const getProductoByIdCategoria = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await categoriaModel.getProductoByIdCategoria(id);
    if (categoria) {
      res.json(categoria);
    } else {
      res.status(404).json({ message: 'Categoria no encontrada' });
    }
  } catch (error) {
    console.error('Error al buscar la categoria por ID:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const categoriaController = {
  getAll,
  getCategoriaById,
  createCategoria,
  updateCategoria,
  deleteCategoria,
  getProductoByIdCategoria,
};
