import {Router} from 'express'
import { 
    activMembresiaProducto, 
    createMembresiaProducto, 
    delproducto, 
    getExisteProMembresia, 
    getMembresiaProducto, 
    getMembresiaProductos, 
    updateMembresiaProducto 
} from '../controllers/membresiaProductos.controller.js';

const router = Router();

    // Routes
    router.post("/", createMembresiaProducto);
    router.get("/", getMembresiaProductos);
    router.put("/:id", updateMembresiaProducto);
    router.delete("/:id/:status", activMembresiaProducto);
    router.get("/:id", getMembresiaProducto);
    router.get("/:mem/:pro", getExisteProMembresia);    
    router.delete("/:id", delproducto); 

export default router;