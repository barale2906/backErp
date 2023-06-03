import { ComisionesEncabezado } from "../models/ComisionesEncabezado.js";
import { ComisionesProducto } from "../models/ComisionesProducto.js";
import { Productos } from "../models/Producto.js";

// Obtener el total de las comisionProductos
export async function getComisionesProductos(req, res) {
    try {
        const comisionProductos = await ComisionesProducto.findAll({
            include:[{model:ComisionesEncabezado}, {model:Productos}],
        });
        res.json(comisionProductos);
    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
}

// Crear Comision
export async function createComisionProducto(req, res) {    
    try {        
        let newComision = await ComisionesProducto.create(req.body);
        return res.status(201).json(newComision);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received"); 
}

//Detalles de una Comision
export async function getComisionProducto(req, res) {
    const { id } = req.params;
    try {
        const comisionProducto = await ComisionesProducto.findAll({
            include:[{model:Productos}],
            where:{
                comiEncaId:id
            }
        });

        if(!comisionProducto)
            return res.status(404).json({message: "ComisionProducto does not exists"});
        
        res.json(comisionProducto);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

//Actualizar comisionProducto
export const updateComisionProducto = async (req, res) => {
    try {
        const { id } = req.params;

        const comisionProducto = await ComisionesProducto.findByPk(id);
        
        comisionProducto.set(req.body);

        await comisionProducto.save();

        res.status(200).json(comisionProducto);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//Activar-desactivar ComisionProducto
export const activComisionProducto = async (req, res) => {
    try {
        const { id, status } = req.params;  
        const comisionProducto = await ComisionesProducto.findByPk(id);
        
        //comisionProducto.set(req.body);
        comisionProducto.set({"status": status});

        await comisionProducto.save();
    
        return res.status(200).json(comisionProducto);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Verificar producto en una comision 
export async function getExisteProComision(req, res) {
    const { mem, pro } = req.params;
    try {
            const comision = await ComisionesProducto.findOne({
                include:[{model:Productos}],
                where: {
                    comiEncaId:mem,
                    prodId:pro
                }
            });
        
        /* if(comision.length===0){
            return res.status(201).json({message: "does not exists"});
        } else {            
            return res.status(200).json(comision);
        } */

        return res.json(comision);
        
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

//Comision por encabezado
export async function delproducto(req, res) {
    const {id} = req.params;
    try {
            await ComisionesProducto.destroy({
                where: {
                    id,
                },
            });

            return res.sendStatus(204).id;

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}