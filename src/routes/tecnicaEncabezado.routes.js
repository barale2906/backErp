import {Router} from 'express';
import { 
    createTecnicaEncabezado, 
    deleteTecnicaEncabezado, 
    getTecnicaEncabezados, 
    getTecnicaEncabezado, 
    updateTecnicaEncabezado,
    getFacturasPago,
    getTecnicaEncaRango
  } from '../controllers/tecnicaEncabezado.controller.js';

const router = Router();
  
  // Routes
  router.post("/", createTecnicaEncabezado);
  router.get("/", getTecnicaEncabezados);
  router.put("/:id", updateTecnicaEncabezado);  
  router.get("/:id", getTecnicaEncabezado);
  router.delete("/:id/:status", deleteTecnicaEncabezado);
  router.get("/2/pago", getFacturasPago);
  router.get("/:inicio/:fin", getTecnicaEncaRango);
  
  export default router;