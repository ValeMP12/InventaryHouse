import { pool } from "../database/connection.js";

const findAll = async () => {
    const { rows } = await pool.query("SELECT * FROM inventario ORDER BY id_inventario ASC");
    return rows;
};

// Función para buscar un inventario por su ID
const getInventarioById = async (id) => {
    try {
        const query = 'SELECT * FROM inventario WHERE id_inventario = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
     } catch (error){
        throw error;
     } 
};

const createInventario = async (codigo, existencia, producto, empresa) => {
    try {
        const query = 'INSERT INTO inventario (codigo, existencia, producto, empresa) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [codigo, existencia, producto, empresa];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const updateInventario = async (id_inventario, codigo, existencia, producto, empresa) => {
    try {
        const query = 'UPDATE inventario SET codigo = $1, existencia = $2, producto = $3, empresa = $4 WHERE id_inventario = $5 RETURNING *';
        const values = [codigo, existencia, producto, empresa, id_inventario];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const deleteInventario = async (id) => {
    try {
        const query = 'DELETE FROM inventario WHERE id_inventario = $1 RETURNING *';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

// Función para mostrar el producto de un inventario
const getProductoByIdInventario = async (id) => {
    try {
        const query = 'SELECT d.nombre, e.id_inventario FROM producto e INNER JOIN producto d ON d.id_inventario = e.id_inventario WHERE e.id_inventario = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
     } catch (error){
        throw error;
     } 
};

export const inventarioModel = {
    findAll, 
    getInventarioById,
    createInventario, 
    updateInventario,
    deleteInventario,
    getProductoByIdInventario,
};
