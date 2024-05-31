import { employeesModel } from "../employeesModel.js";

const getAll = async (req, res) => {
    try {

        const response = await employeesModel.findAll();
        res.json(response);
        
    } catch (error) {
        console.log(error);
        
    }
};

export const employeesController = { 
    getAll,
};