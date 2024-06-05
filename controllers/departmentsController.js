import { DepartmentsModel } from "../models/departmentsModel.js";

const getAll = async (req,res) => {
    try {
        const response = await DepartmentsModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

// Controlador para buscar un Departmento por su ID
const getDepartmentById = async (req, res) => {
    const { id } = req.params;
    try {
        const Departmento = await DepartmentsModel.getDepartmentById(id);
        if (Departmento) {
            res.json(Departmento);
        } else {
            res.status(404).json({ message: 'Departmento no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar Departmento por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createDepartment = async (req, res) => {
    const { nombre } = req.body;
    try {
        const newDepartment = await DepartmentsModel.createDepartment( nombre );
        res.status(201).json(newDepartment);
    } catch (error) {
        console.error('Error al registrar Departmento:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateDepartment = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    try {
        const updatedDepartment = await DepartmentsModel.updateDepartment(id, nombre);
        if (updateDepartment) {
            res.json(updateDepartment);
        } else {
            res.status(404).json({ message: 'Departmento no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar Departmento por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteDepartment = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedDepartment = await DepartmentsModel.deleteDepartment(id);
        if (deletedDepartment) {
            res.json({ message: 'Departmento eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Departmento no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar Departmento por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Controlador para buscar los empleados que son parte de un departamento
const getEmployeesByIdDepartment = async (req, res) => {
    const { id } = req.params;
    try {
        const departamento = await DepartmentsModel.getEmployeesByIdDepartment(id);
        if (departamento) {
            res.json(departamento);
        } else {
            res.status(404).json({ message: 'Departamento no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar empleados por ID department:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};


export const departmentsController = {
    getAll,
    getDepartmentById, 
    createDepartment,
    updateDepartment,
    deleteDepartment,
    getEmployeesByIdDepartment,
};