import { Router } from "express";
import { employeesController } from "../employeesController.js";

const router = new Router();

router.get('/',employeesController.getAll);

export default router;