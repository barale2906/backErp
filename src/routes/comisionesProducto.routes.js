import {Router} from 'express'
import { 
    activComisionProducto, 
    createComisionProducto, 
    delproducto, 
    getComisionProducto, 
    getComisionesProductos, 
    getExisteProComision, 
    updateComisionProducto 
} from '../controllers/comisionesProducto.controller.js';

const router = Router();

    // Routes
    router.post("/", createComisionProducto);
    router.get("/", getComisionesProductos);
    router.put("/:id", updateComisionProducto);
    router.delete("/:id/:status", activComisionProducto);
    router.get("/:id", getComisionProducto);
    router.get("/:mem/:pro", getExisteProComision);    
    router.delete("/:id", delproducto); 

export default router;