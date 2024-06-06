import { Router } from "express";
import { ClientesController } from "../controllers/ClientesController.js";
import { inventarioController } from "../controllers/inventarioController.js";
import { proveedoresController } from "../controllers/proveedoresController.js";
import { productosController } from "../controllers/productosController.js";
import { usuariosController } from "../controllers/usuariosController.js";
import { categoriaController } from "../controllers/categoriaController.js";

const router = new Router();

// Rutas para Clientes
router.get('/clientes/', ClientesController.getAll);
router.get('/clientes/:id', ClientesController.getClienteId);
router.post('/clientes/', ClientesController.createCliente);
router.put('/clientes/:id', ClientesController.updateCliente);
router.delete('/clientes/:id', ClientesController.deleteCliente);

// Rutas para Inventario
router.get('/inventario/', inventarioController.getAll);
router.get('/inventario/:id', inventarioController.getInventarioId);
router.post('/inventario/', inventarioController.createInventario);
router.put('/inventario/:id', inventarioController.updateInventario);
router.delete('/inventario/:id', inventarioController.deleteInventario);

// Rutas para Proveedores
router.get('/proveedores/', proveedoresController.getAll);
router.get('/proveedores/:id', proveedoresController.getProveedoresId);
router.post('/proveedores/', proveedoresController.createProveedor);
router.put('/proveedores/:id', proveedoresController.updateProveedor);
router.delete('/proveedores/:id', proveedoresController.deleteProveedor);

// Rutas para Productos
router.get('/productos/', productosController.getAll);
router.get('/productos/:id', productosController.getProductosId);
router.post('/productos/', productosController.createProducto);
router.put('/productos/:id', productosController.updateProducto);
router.delete('/productos/:id', productosController.deleteProducto);

// Rutas para Usuarios
router.get('/usuarios/', usuariosController.getAll);
router.get('/usuarios/:id', usuariosController.getUsuariosId);
router.post('/usuarios/', usuariosController.createUsuario);
router.put('/usuarios/:id', usuariosController.updateUsuario);
router.delete('/usuarios/:id', usuariosController.deleteUsuario);



// Rutas para Categoria
router.get('/categoria/', categoriaController.getAll);
router.get('/categoria/:id', categoriaController.getcategoriaId);
router.post('/categoria/', categoriaController.createcategoria);
router.put('/categoria/:id', categoriaController.updatecategoria);
router.delete('/categoria/:id', categoriaController.deletecategoria);


export default router;
