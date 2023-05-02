import {Router} from 'express';
import { createFacturaEncabezado, deleteFacturaEncabezado, getEncabezadoId, getFacturaEncabezado, getFacturaEncabezados, getFacturaEncaRango, updateFacturaEncabezado } from '../controllers/facturaEncabezado.controller.js';

const router = Router();
  
  // Routes
  router.post("/", createFacturaEncabezado);
  router.get("/", getFacturaEncabezados);
  router.put("/:id", updateFacturaEncabezado);  
  router.get("/:id", getFacturaEncabezado);
  router.get("/:id/unitaria", getEncabezadoId);
  router.delete("/:id", deleteFacturaEncabezado);
  router.get("/:inicio/:fin", getFacturaEncaRango);
  
  export default router;