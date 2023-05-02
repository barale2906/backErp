import { MembresiaUsuarios } from "../models/MembresiaUsuarios.js";


// Obtener el total de las membresiaUsuarios
export async function getMembresiaUsuarios(req, res) {
    try {
        const membresiaUsuarios = await MembresiaUsuarios.findAll({
            order:['name'],
        });
        res.json(membresiaUsuarios);
    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
}

// Crear Membresia
export async function createMembresiaUsuario(req, res) {    
    try {        
        let newMembresia = await MembresiaUsuarios.create(req.body);
        return res.status(201).json(newMembresia);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received"); 
}

//Detalles de una Membresia
export async function getMembresiaUsuario(req, res) {
    const { id } = req.params;
    try {
        const membresiaUsuario = await MembresiaUsuarios.findByPk(id);

        if(!membresiaUsuario)
            return res.status(404).json({message: "MembresiaUsuario does not exists"});

        res.json(membresiaUsuario);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

//Actualizar membresiaUsuario
export const updateMembresiaUsuario = async (req, res) => {
    try {
        const { id } = req.params;

        const membresiaUsuario = await MembresiaUsuarios.findByPk(id);
        
        membresiaUsuario.set(req.body);

        await membresiaUsuario.save();

        res.status(200).json(membresiaUsuario);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//Activar-desactivar MembresiaUsuario
export const asigMembresiaUsuario = async (req, res) => {
    try {
        const { id, membreEncaId } = req.params;  
        const membresiaUsuario = await MembresiaUsuarios.findByPk(id);
        
        //membresiaUsuario.set(req.body);
        membresiaUsuario.set({"membreEncaId": membreEncaId});

        await membresiaUsuario.save();
    
        return res.status(200).json(membresiaUsuario);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};