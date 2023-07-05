import { ComisionesEncabezado } from "../models/ComisionesEncabezado.js";
import { ComisionesProducto } from "../models/ComisionesProducto.js";

// Obtener el total de las comisionesEncabezado
export async function getComisionesEncabezado(req, res) {
    try {
        const comisionEncabezado = await ComisionesEncabezado.findAll({
        atributes: ["id", "name"],
        });
        res.json(comisionEncabezado);
    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
}

// Crear Comision
export async function createComisionEncabezado(req, res) {    
    try {        
        let newComision = await ComisionesEncabezado.create(req.body);
        return res.status(201).json(newComision);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received"); 
}

//Detalles de una Comision
export async function getComisionEncabezado(req, res) {
    const { id } = req.params;
    try {
        const comisionEncabezado = await ComisionesEncabezado.findAll({
        include:[{model:ComisionesProducto}],            
        where: {
            id
        }
    });

        if(!comisionEncabezado)
            return res.status(404).json({message: "ComisionEncabezado does not exists"});

        res.json(comisionEncabezado);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

//Actualizar comisionEncabezado
export const updateComisionEncabezado = async (req, res) => {
    try {
        const { id } = req.params;

        const comisionEncabezado = await ComisionesEncabezado.findByPk(id);
        
        comisionEncabezado.set(req.body);

        await comisionEncabezado.save();

        res.status(200).json(comisionEncabezado);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//Activar-desactivar ComisionEncabezado
export const activComisionEncabezado = async (req, res) => {
    try {
        const { id, status } = req.params;  
        const comisionEncabezado = await ComisionesEncabezado.findByPk(id);
        
        //comisionEncabezado.set(req.body);
        comisionEncabezado.set({"status": status});

        await comisionEncabezado.save();
    
        return res.status(200).json(comisionEncabezado);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};