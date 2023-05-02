import {Router} from 'express'
import { activMedioPago, createMedioPago, getMedioPago, getMedioPagos, updateMedioPago } from '../controllers/medioPago.controller.js';

const router = Router();

  // Routes
    router.post("/", createMedioPago);
    router.get("/", getMedioPagos);
    router.put("/:id", updateMedioPago);
    router.delete("/:id", activMedioPago);
    router.get("/:id", getMedioPago);

export default router;