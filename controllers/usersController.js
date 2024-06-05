import { usersModel } from "../models/usersModel.js";

const getAll = async (req,res) => {
    try {
        const response = await usersModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const createUser = async (req, res) => {
    const { name, password, email, rol } = req.body;
    try {
        const newUsers = await usersModel.createUser(name, password, email, rol);
        res.status(201).json(newUsers);
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, password, email, rol } = req.body;
    try {
        const updatedUser = await usersModel.updateUser(id, name, password, email, rol); // Cambiar de updateEmployee a updateUser
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar usuario por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await usersModel.deleteUser(id);
        if (deletedUser) {
            res.json({ message: 'Usuario eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar usuario por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const usersController = {
    getAll,
    createUser,
    updateUser,
    deleteUser
};
