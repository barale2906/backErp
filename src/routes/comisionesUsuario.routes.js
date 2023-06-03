import {Router} from 'express'
import { asigComisionUsuario, createComisionUsuario, getComisionUsuario, getComisionesUsuarios, updateComisionUsuario } from '../controllers/comisionesUsuario.controller.js';

const router = Router();

    // Routes
    router.post("/", createComisionUsuario);
    router.get("/", getComisionesUsuarios);
    router.put("/:id", updateComisionUsuario);
    router.delete("/:id/:comiEncaId", asigComisionUsuario);
    router.get("/:id", getComisionUsuario);

export default router;