import { productosController } from "../controllers/productosController.js";
import { router } from "./Route.js";

router.put('/productos/:id', productosController.updateClientes);
