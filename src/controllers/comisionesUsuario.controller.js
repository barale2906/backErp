import { ComisionesUsuario } from "../models/ComisionesUsuario.js";



// Obtener el total de las comisionUsuarios
export async function getComisionesUsuarios(req, res) {
    try {
        const comisionUsuarios = await ComisionesUsuario.findAll({
            order:['name'],
        });
        res.json(comisionUsuarios);
    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
}

// Crear Comision
export async function createComisionUsuario(req, res) {    
    try {        
        let newComision = await ComisionesUsuario.create(req.body);
        return res.status(201).json(newComision);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received"); 
}

//Detalles de una Comision
export async function getComisionUsuario(req, res) {
    const { id } = req.params;
    try {
        const comisionUsuario = await ComisionesUsuario.findByPk(id);

        if(!comisionUsuario)
            return res.status(404).json({message: "ComisionUsuario does not exists"});

        res.json(comisionUsuario);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

//Actualizar comisionUsuario
export const updateComisionUsuario = async (req, res) => {
    try {
        const { id } = req.params;

        const comisionUsuario = await ComisionesUsuario.findByPk(id);
        
        comisionUsuario.set(req.body);

        await comisionUsuario.save();

        res.status(200).json(comisionUsuario);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//Activar-desactivar ComisionUsuario
export const asigComisionUsuario = async (req, res) => {
    try {
        const { id, comiEncaId } = req.params;  
        const comisionUsuario = await ComisionesUsuario.findByPk(id);
        
        //comisionUsuario.set(req.body);
        comisionUsuario.set({"comiEncaId": comiEncaId});

        await comisionUsuario.save();
    
        return res.status(200).json(comisionUsuario);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};