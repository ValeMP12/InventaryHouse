import { employeesModel } from "../models/employeesModel.js";

const getAll = async (req,res) => {
    try {
        const response = await employeesModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

// Controlador para buscar un empleado por su ID
const getEmployeeById = async (req, res) => {
    const { id } = req.params;
    try {
        const empleado = await employeesModel.getEmployeeById(id);
        if (empleado) {
            res.json(empleado);
        } else {
            res.status(404).json({ message: 'Empleado no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar empleado por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createEmployee = async (req, res) => {
    const { id_departamento, nombre, sueldo } = req.body;
    try {
        const newEmployee = await employeesModel.createEmployee( id_departamento, nombre, sueldo);
        res.status(201).json(newEmployee);
    } catch (error) {
        console.error('Error al registrar empleado:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { nombre, id_departamento, sueldo } = req.body;
    try {
        const updatedEmployee = await employeesModel.updateEmployee(id, nombre, id_departamento, sueldo);
        if (updateEmployee) {
            res.json(updateEmployee);
        } else {
            res.status(404).json({ message: 'Empleado no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar empleado por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedEmployee = await employeesModel.deleteEmployee(id);
        if (deletedEmployee) {
            res.json({ message: 'Empleado eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Empleado no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar empleado por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Controlador para buscar el departamento de un empleado por su ID
const getDepartmentByIdEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const empleado = await employeesModel.getDepartmentByIdEmployee(id);
        if (empleado) {
            res.json(empleado);
        } else {
            res.status(404).json({ message: 'Empleado no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar empleado por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const employeesController = {
    getAll,
    getEmployeeById, 
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getDepartmentByIdEmployee
};