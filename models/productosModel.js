import { pool } from "../database/connection.js";

const findAll = async () => {
    const { rows } = await pool.query("SELECT * FROM productos ORDER BY id_producto ASC");
    return rows;
};

const getProductosById = async (id) => {
    try {
        const query = 'SELECT * FROM productos WHERE id_producto = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const createProducto = async (Cant, Codigo, Producto, Id_prov, Categoria, precio_unit, precio_vent) => {
    try {
        const query = 'INSERT INTO productos (cant, codigo, producto, id_prov, categoria, precio_unit, precio_vent) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
        const values = [Cant, Codigo, Producto, Id_prov, Categoria, precio_unit, precio_vent];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const updateProducto = async (id_producto, Cant, Codigo, Producto, Id_prov, Categoria, precio_unit, precio_vent) => {
    try {
        const query = 'UPDATE productos SET cant = $1, codigo = $2, producto = $3, id_prov = $4, categoria = $5, precio_unit = $6, precio_vent = $7 WHERE id_producto = $8 RETURNING *';
        const values = [Cant, Codigo, Producto, Id_prov, Categoria, precio_unit, precio_vent, id_producto];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const deleteProducto = async (id) => {
    try {
        const query = 'DELETE FROM productos WHERE id_producto = $1 RETURNING *';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const getProveedorByIdProducto = async (id) => {
    try {
        const query = 'SELECT p.nom_empresa, pr.id_producto FROM proveedor p INNER JOIN productos pr ON p.id_proveedor = pr.id_prov WHERE pr.id_producto = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
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
