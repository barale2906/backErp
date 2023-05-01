import {Router} from 'express';
import { createTecnicaDetalle, deleteTecnicaDetalle, getTecnicaDetalle, getTecnicaDetalles, getcostolistapreci, updateTecnicaDetalle } from '../controllers/tecnicaDetalle.controller.js';

const router = Router();
  
  // Routes
  router.post("/", createTecnicaDetalle);
  router.get("/", getTecnicaDetalles);
  router.put("/:id", updateTecnicaDetalle);  
  router.get("/:id", getTecnicaDetalle);
  router.delete("/:id", deleteTecnicaDetalle);
  router.get("/:bod/:producto", getcostolistapreci);
  
  export default router;