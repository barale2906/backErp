import {Router} from 'express'
import { 
    createDomicilio, 
    getDomicilio, 
    getDomicilios, 
    getDomiciliosActiv, 
    getDomiciliosLega, 
    updateDomicilio 
} from '../controllers/domicilio.controller.js';

const router = Router();

// Routes
router.post("/", createDomicilio);
router.get("/", getDomicilios);
router.get("/activos", getDomiciliosActiv);
router.get("/lega", getDomiciliosLega);
router.put("/:id", updateDomicilio);
router.get("/:id", getDomicilio);


export default router;