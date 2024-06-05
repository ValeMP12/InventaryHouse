import { pool } from "../database/connection.js";

const findAll = async () => {
    const { rows } = await pool.query("SELECT * FROM usuario ORDER BY id_usuario ASC");
    return rows;
};

// Función para buscar un usuario por su ID
const getUsuariosById = async (id) => {
    try {
        const query = 'SELECT * FROM usuarios WHERE c=id_usuario = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
     } catch (error){
        throw error;
     } 
};

const createUsuario = async (id_usuario, nombre, cargo, horario, turno, telefono) => {
    try {
        const query = 'INSERT INTO usuario (id_usuario, nombre, cargo, horario, turno, telefono) VALUES ($1, $2, $3, $4, $5, $6, ) RETURNING *';
        const values = [id_usuario, nombre, cargo, horario, turno, telefono];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const updateUsuario = async (id_usuario, nombre, cargo, horario, turno, telefono) => {
    try {
        const query = 'UPDATE usuario SET  nombre = $1, cargo = $2 , horario = $3 , turno =$4, telefono =$5,  WHERE id_usuario = $6 RETURNING *';
        const values = [id_usuario, nombre, cargo, horario, turno, telefono];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const deleteUsuario = async (id) => {
    try {
        const query = 'DELETE FROM usuario WHERE id_usuario = $1 RETURNING *';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

// Función para mostrar el cargo de un usuario
const getCargoByIdUsuario = async (id) => {
    try {
        const query = 'SELECT d.nombre,e.id_usuario FROM cargo e INNER JOIN cargo d ON d.id_usuario = e.id_usuario WHERE id_usuario = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
     } catch (error){
        throw error;
     } 
};

export const usuariosModel = {
    findAll, 
    getUsuariosById,
    createUsuario, 
    updateUsuario,
    deleteUsuario,
    getCargoByIdUsuario,
};