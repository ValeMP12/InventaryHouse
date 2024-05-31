import { pool } from "../database/connection.js";

const findAll = async () => {
    const { rows } = await pool.query("SELECT * FROM proveedor ORDER BY id_proveedor ASC");
    return rows;
};

// Función para buscar un producto por su ID
const getProveedoresById = async (id) => {
    try {
        const query = 'SELECT * FROM proveedores WHERE c=id_proveedor = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
     } catch (error){
        throw error;
     } 
};

const createProveedor = async (id_proveedor, Nom_empresa, Nom_proveedor, Dias, Telefono, Direccion) => {
    try {
        const query = 'INSERT INTO producto (id_proveedor, Nom_empresa, Nom_proveedor, Dias, Telefono, Direccion) VALUES ($1, $2, $3, $4, $5, $6, ) RETURNING *';
        const values = [id_proveedor, Nom_empresa, Nom_proveedor, Dias, Telefono, Direccion];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const updateProveedor = async (id_proveedor, Nom_empresa, Nom_proveedor, Dias, Telefono, Direccion) => {
    try {
        const query = 'UPDATE proveedor SET  Nom_empresa = $1, Nom_proveedor = $2 , dias = $3 , telefono =$4, direccion =$5,  WHERE id_producto = $6 RETURNING *';
        const values = [id_proveedor, Nom_empresa, Nom_proveedor, Dias, Telefono, Direccion];
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
        const query = 'SELECT d.nombre,e.id_proveedor FROM producto e INNER JOIN proveedor d ON d.id_producto = e.id_producto WHERE id_proveedor = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
     } catch (error){
        throw error;
     } 
};

export const proveedoresModel = {
    findAll, 
    getProveedoresById,
    createProveedor, 
    updateProveedor,
    deleteProveedor,
    getProductoByIdProveedor,
};