import { pool } from "../database/connection.js";

const findAll = async () => {
  const { rows } = await pool.query("SELECT * FROM categoria ORDER BY id_categoria ASC");
  return rows;
};

// Función para buscar una categoria por su ID
const getCategoriaById = async (id) => {
  try {
    const query = 'SELECT * FROM categoria WHERE id_categoria = $1';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const createCategoria = async (nombre, descripcion) => {
  try {
    const query = 'INSERT INTO categoria (nombre, descripcion) VALUES ($1, $2) RETURNING *';
    const values = [nombre, descripcion];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const updateCategoria = async (id_categoria, nombre, descripcion) => {
  try {
    const query = 'UPDATE categoria SET nombre = $1, descripcion = $2 WHERE id_categoria = $3 RETURNING *';
    const values = [nombre, descripcion, id_categoria];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const deleteCategoria = async (id) => {
  try {
    const query = 'DELETE FROM categoria WHERE id_categoria = $1 RETURNING *';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

// Función para mostrar los productos de una categoria
const getProductoByIdCategoria = async (id) => {
  try {
    const query = 'SELECT p.nombre, c.id_categoria FROM producto p INNER JOIN categoria c ON p.id_categoria = c.id_categoria WHERE c.id_categoria = $1';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

export const categoriaModel = {
  findAll,
  getCategoriaById,
  createCategoria,
  updateCategoria,
  deleteCategoria,
  getProductoByIdCategoria,
};
