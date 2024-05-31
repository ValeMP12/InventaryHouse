import { Router } from "express";
import { ClientesController } from "../controllers/ClientesController.js";
import { InventarioController } from "../controllers/InventarioController.js";
import { ProveedoresController } from "../controllers/ProveedoresController.js";
import { ProductosController } from "../controllers/ProductosController.js";
import { UsersController } from "../controllers/UsersController.js";

const router = new Router();

// Rutas para Clientes
router.get('/clientes/', ClientesController.getAll);
router.get('/clientes/:id', ClientesController.getClienteById);
router.post('/clientes/', ClientesController.createCliente);
router.put('/clientes/:id', ClientesController.updateCliente);
router.delete('/clientes/:id', ClientesController.deleteCliente);

// Rutas para Inventario
router.get('/inventario/', InventarioController.getAll);
router.get('/inventario/:id', InventarioController.getInventarioById);
router.post('/inventario/', InventarioController.createInventario);
router.put('/inventario/:id', InventarioController.updateInventario);
router.delete('/inventario/:id', InventarioController.deleteInventario);

// Rutas para Proveedores
router.get('/proveedores/', ProveedoresController.getAll);
router.get('/proveedores/:id', ProveedoresController.getProveedorById);
router.post('/proveedores/', ProveedoresController.createProveedor);
router.put('/proveedores/:id', ProveedoresController.updateProveedor);
router.delete('/proveedores/:id', ProveedoresController.deleteProveedor);

// Rutas para Productos
router.get('/productos/', ProductosController.getAll);
router.get('/productos/:id', ProductosController.getProductoById);
router.post('/productos/', ProductosController.createProducto);
router.put('/productos/:id', ProductosController.updateProducto);
router.delete('/productos/:id', ProductosController.deleteProducto);

// Rutas para Usuarios
router.get('/usuarios/', UsersController.getAll);
router.get('/usuarios/:id', UsersController.getUserById);
router.post('/usuarios/', UsersController.createUser);
router.put('/usuarios/:id', UsersController.updateUser);
router.delete('/usuarios/:id', UsersController.deleteUser);

export default router;
