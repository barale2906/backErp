import {Router} from 'express'
import { 
    activTarifa,
    createDomiciliosTarifa, 
    getDomiciliosTarifa, 
    getDomiciliosTarifas, 
    updateDomiciliosTarifas 
} from '../controllers/domicilioTarifa.controller.js';


const router = Router();

// Routes
router.post("/", createDomiciliosTarifa);
router.get("/", getDomiciliosTarifas);
router.put("/:id", updateDomiciliosTarifas);
router.get("/:id", getDomiciliosTarifa);
router.delete("/:id/:status", activTarifa);


export default router;