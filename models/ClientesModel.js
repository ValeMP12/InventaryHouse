import { pool } from "../database/connection.js";

const findAll = async () => {
    const { rows } = await pool.query("SELECT * FROM clientes ORDER BY id_clientes ASC");
    return rows;
};

// Función para buscar un cliente por su ID
const getClienteById = async (id) => {
    try {
        const query = 'SELECT * FROM clientes WHERE id_clientes = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const createCliente = async (nombre, fecha_pago, saldo) => {
    try {
        const query = 'INSERT INTO clientes (nombre, fecha_pago, saldo) VALUES ($1, $2, $3) RETURNING *';
        const values = [nombre, fecha_pago, saldo];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const updateCliente = async (id_clientes, nombre, fecha_pago, saldo) => {
    try {
        const query = 'UPDATE clientes SET nombre = $1, fecha_pago = $2, saldo = $3 WHERE id_clientes = $4 RETURNING *';
        const values = [nombre, fecha_pago, saldo, id_clientes];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const deleteCliente = async (id) => {
    try {
        const query = 'DELETE FROM clientes WHERE id_clientes = $1 RETURNING *';
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
        const query = 'SELECT p.nombre, c.id_clientes FROM producto p INNER JOIN clientes c ON p.id_cliente = c.id_clientes WHERE c.id_clientes = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
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
