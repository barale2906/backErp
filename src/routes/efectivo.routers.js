import {Router} from 'express';
import { 
  createEfectivo, 
  deleteEfectivo, 
  getEfectivo, 
  getEfectivoMovimiento, 
  getEfectivos, 
  getEfectivoUser, 
  getMovimientos, 
  updateEfectivo 
} from '../controllers/efectivo.controller.js';


const router = Router();
  
  // Routes
  router.post("/", createEfectivo);
  router.get("/", getEfectivos);
  router.put("/:id", updateEfectivo);  
  router.get("/:id", getEfectivo);
  router.delete("/:id", deleteEfectivo);

  router.get("/:id/bodega", getEfectivoMovimiento) // Muestra los movimientos por bodega
  router.get("/:id/user", getEfectivoUser) // Muestra los movimientos por bodega
  router.get("/:mov/:inicio/:fin", getMovimientos) // Muestra los movimientos según registro de facturas en un período

  
  export default router;