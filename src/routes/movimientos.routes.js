import {Router} from 'express';
import { 
    createMovimiento, 
    getMovimientoEspecifico, 
    getMovimientoUser, 
    getMovimientosMovimiento, 
    getMovimientosTodos, 
    updateMovimiento 
} from '../controllers/movimientos.controller.js';


const router = Router();

// Routes
router.post("/", createMovimiento);
router.put("/:id", updateMovimiento);
router.get("/", getMovimientosTodos);  
router.get("/:id/medio", getMovimientosMovimiento) // Muestra los movimientos por medio de pago
router.get("/:id/user", getMovimientoUser) // Muestra los movimientos por usuario
router.get("/:medio/:inicio/:fin/:tipo", getMovimientoEspecifico) // Muestra los movimientos según registro de movimientos en un período


export default router;