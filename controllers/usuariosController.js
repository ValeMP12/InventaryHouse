import { usuariosModel } from "../models/usuariosModel.js";

const getAll = async (req,res) => {
    try {
        const response = await usuariosModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

// Controlador para buscar un usuario por su ID
const getUsuariosId = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await usuariosModel.getUsuariosById(id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar el usuario por su ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createUsuario = async (req, res) => {
    const {id_usuario, nombre, cargo, horario, turno, telefono } = req.body;
    try {
        const newUsuario = await usuariosModel.createProveedor(id_usuario, nombre, cargo, horario, turno, telefono );
        res.status(201).json(newUsuario);
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateUsuario = async (req, res) => {
    const { id } = req.params;
    const {id_usuario, nombre, cargo, horario, turno, telefono} = req.body;
    try {
        const updateUsuario = await usuariosModel.updateUsuario(id_usuario, nombre, cargo, horario, turno, telefono);
        if (updateUsuario) {
            res.json(updateUsuario);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar el usuario por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteUsuario = await usuariosModel.deleteUsuario(id);
        if (deleteUsuario) {
            res.json({ message: 'usuario eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar usuario por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Controlador para buscar un cargo de un usuario por su ID
const getCargoByIdUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const proveedor = await usuariosModel.getCargoByIdUsuario(id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar el usuario por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const usuariosController = {
    getAll,
    getUsuariosId, 
    createUsuario,
    updateUsuario,
    deleteUsuario,
    getCargoByIdUsuario
};