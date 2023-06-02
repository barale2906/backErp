import {Router} from 'express'
import { 
    activComisionEncabezado, 
    createComisionEncabezado, 
    getComisionEncabezado, 
    getComisionesEncabezado, 
    updateComisionEncabezado 
} from '../controllers/comisionesEncabezado.controller.js';

const router = Router();

    // Routes
    router.post("/", createComisionEncabezado);
    router.get("/", getComisionesEncabezado);
    router.put("/:id", updateComisionEncabezado);
    router.delete("/:id/:status", activComisionEncabezado);
    router.get("/:id", getComisionEncabezado);

export default router;