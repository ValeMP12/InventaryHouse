import { pool } from "../database/connection.js";

const findAll = async () => {
    const { rows } = await pool.query("SELECT * FROM cliente ORDER BY id_cliente ASC");
    return rows;
};

// Función para buscar un cliente por su ID
const getClienteById = async (id) => {
    try {
        const query = 'SELECT * FROM cliente WHERE id_cliente = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
     } catch (error){
        throw error;
     } 
};

const createCliente = async (id_Cliente, codigo, existencia, producto, empresa) => {
    try {
        const query = 'INSERT INTO empleado (id_Cliente, Codigo, existencia, producto, empresa) VALUES ($1, $2, $3,$4,$5) RETURNING *';
        const values = [id_Cliente, codigo, existencia, producto, empresa];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const updateCliente = async (id_Cliente, codigo, existencia, producto, empresa) => {
    try {
        const query = 'UPDATE cliente SET Codigo = $1, existencia = $2, producto = $3 , empresa = $4 WHERE id_cliente = $5 RETURNING *';
        const values = [codigo, existencia, producto, empresa];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const deleteCliente = async (id) => {
    try {
        const query = 'DELETE FROM cliente WHERE id_cliente = $1 RETURNING *';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

// Función para mostrar los productos de un cliente
const getProductoByIdCliente = async (id) => {
    try {
        const query = 'SELECT d.nombre,e.id_cliente FROM cliente e INNER JOIN producto d ON d.id_producto = e.id_producto WHERE id_cliente = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
     } catch (error){
        throw error;
     } 
};

export const ClientesModel = {
    findAll, 
    getClienteById,
    createCliente, 
    updateCliente,
    deleteCliente,
    getProductoByIdCliente,
};