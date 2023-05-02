import {Router} from 'express'
import {  
    asigMembresiaUsuario, 
    createMembresiaUsuario, 
    getMembresiaUsuario, 
    getMembresiaUsuarios, 
    updateMembresiaUsuario 
} from '../controllers/membresiaUsuarios.controller.js';

const router = Router();

    // Routes
    router.post("/", createMembresiaUsuario);
    router.get("/", getMembresiaUsuarios);
    router.put("/:id", updateMembresiaUsuario);
    router.delete("/:id/:membreEncaId", asigMembresiaUsuario);
    router.get("/:id", getMembresiaUsuario);

export default router;