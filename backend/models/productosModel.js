import { pool } from "../database/connection.js";

const findAll = async () => {
    const { rows } = await pool.query("SELECT * FROM producto ORDER BY id_producto ASC");
    return rows;
};

// Función para buscar un producto por su ID
const getProductosById = async (id) => {
    try {
        const query = 'SELECT * FROM productos WHERE c=id_producto = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
     } catch (error){
        throw error;
     } 
};

const createProducto = async (id_producto, cant, Codigo_id, producto, id_prov,categoria,precio_unit,precio_vent) => {
    try {
        const query = 'INSERT INTO producto (id_producto, cant, Codigo_id, producto, id_prov, categoria, precio_unit, precio_vent) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
        const values = [id_producto, cant, Codigo_id, producto, id_prov,categoria,precio_unit,precio_vent];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const updateProducto = async (id_producto, cant, Codigo_id, producto, id_prov,categoria,precio_unit,precio_vent) => {
    try {
        const query = 'UPDATE producto SET Cantidad = $1, Codigo_id = $2, producto = $3 , id_prov = $4 , categoria =$5, precio_unit =$6, precio_vent =$7  WHERE id_producto = $8 RETURNING *';
        const values = [id_producto, cant, Codigo_id, producto, id_prov,categoria,precio_unit,precio_vent];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const deleteProducto = async (id) => {
    try {
        const query = 'DELETE FROM producto WHERE id_producto = $1 RETURNING *';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

// Función para mostrar el proveedor de un producto
const getProveedorByIdProducto = async (id) => {
    try {
        const query = 'SELECT d.codigo,e.id_producto FROM producto e INNER JOIN producto d ON d.id_proveedor = e.id_proveedor WHERE id_producto = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
     } catch (error){
        throw error;
     } 
};

export const productosModel = {
    findAll, 
    getProductosById,
    createProducto, 
    updateProducto,
    deleteProducto,
    getProveedorByIdProducto,
};