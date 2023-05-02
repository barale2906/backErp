import {Router} from 'express'
import { 
    activMembresiaEncabezado,
    createMembresiaEncabezado, 
    getMembresiaEncabezado, 
    getMembresiaEncabezados, 
    updateMembresiaEncabezado
} from '../controllers/membresiaEncabezados.controller.js';

const router = Router();

    // Routes
    router.post("/", createMembresiaEncabezado);
    router.get("/", getMembresiaEncabezados);
    router.put("/:id", updateMembresiaEncabezado);
    router.delete("/:id/:status", activMembresiaEncabezado);
    router.get("/:id", getMembresiaEncabezado);

export default router;