import {Router} from 'express'
import { 
    createDomicilio, 
    getDomicilio, 
    getDomicilios, 
    updateDomicilio 
} from '../controllers/domicilio.controller.js';

const router = Router();

// Routes
router.post("/", createDomicilio);
router.get("/", getDomicilios);
router.put("/:id", updateDomicilio);
router.get("/:id", getDomicilio);


export default router;