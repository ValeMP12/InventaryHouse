import { pool } from "../database/connection.js";

const findAll = async () => {
    const { rows } = await pool.query("SELECT * FROM proveedor ORDER BY id_proveedor ASC");
    return rows;
};

// Función para buscar un proveedor por su ID
const getProveedorById = async (id) => {
    try {
        const query = 'SELECT * FROM proveedor WHERE id_proveedor = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const createProveedor = async (nom_empresa, nom_proveedor, dias, telefono, direccion) => {
    try {
        const query = 'INSERT INTO proveedor (nom_empresa, nom_proveedor, dias, telefono, direccion) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [nom_empresa, nom_proveedor, dias, telefono, direccion];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const updateProveedor = async (id_proveedor, nom_empresa, nom_proveedor, dias, telefono, direccion) => {
    try {
        const query = 'UPDATE proveedor SET nom_empresa = $1, nom_proveedor = $2, dias = $3, telefono = $4, direccion = $5 WHERE id_proveedor = $6 RETURNING *';
        const values = [nom_empresa, nom_proveedor, dias, telefono, direccion, id_proveedor];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const deleteProveedor = async (id) => {
    try {
        const query = 'DELETE FROM proveedor WHERE id_proveedor = $1 RETURNING *';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

// Función para mostrar el producto de un proveedor
const getProductoByIdProveedor = async (id) => {
    try {
        const query = 'SELECT p.nombre, pr.id_proveedor FROM producto pr INNER JOIN proveedor p ON p.id_proveedor = pr.id_prov WHERE p.id_proveedor = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

export const proveedoresModel = {
    findAll, 
    getProveedorById,
    createProveedor, 
    updateProveedor,
    deleteProveedor,
    getProductoByIdProveedor,
};
