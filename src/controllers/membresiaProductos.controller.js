import { MembresiaEncabezados } from "../models/MembresiaEncabezados.js";
import { Productos } from "../models/Producto.js";
import { MembresiaProductos } from "../models/MembresiaProductos.js";


// Obtener el total de las membresiaProductos
export async function getMembresiaProductos(req, res) {
    try {
        const membresiaProductos = await MembresiaProductos.findAll({
            include:[{model:MembresiaEncabezados}, {model:Productos}],
        });
        res.json(membresiaProductos);
    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
}

// Crear Membresia
export async function createMembresiaProducto(req, res) {    
    try {        
        let newMembresia = await MembresiaProductos.create(req.body);
        return res.status(201).json(newMembresia);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received"); 
}

//Detalles de una Membresia
export async function getMembresiaProducto(req, res) {
    const { id } = req.params;
    try {
        const membresiaProducto = await MembresiaProductos.findAll({
            include:[{model:Productos}],
            where:{
                membreEncaId:id
            }
        });

        if(!membresiaProducto)
            return res.status(404).json({message: "MembresiaProducto does not exists"});
        
        res.json(membresiaProducto);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

//Actualizar membresiaProducto
export const updateMembresiaProducto = async (req, res) => {
    try {
        const { id } = req.params;

        const membresiaProducto = await MembresiaProductos.findByPk(id);
        
        membresiaProducto.set(req.body);

        await membresiaProducto.save();

        res.status(200).json(membresiaProducto);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//Activar-desactivar MembresiaProducto
export const activMembresiaProducto = async (req, res) => {
    try {
        const { id, status } = req.params;  
        const membresiaProducto = await MembresiaProductos.findByPk(id);
        
        //membresiaProducto.set(req.body);
        membresiaProducto.set({"status": status});

        await membresiaProducto.save();
    
        return res.status(200).json(membresiaProducto);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Verificar producto en una membresia 
export async function getExisteProMembresia(req, res) {
    const { mem, pro } = req.params;
    try {
            const membresia = await MembresiaProductos.findOne({
                include:[{model:Productos}],
                where: {
                    membreEncaId:mem,
                    prodId:pro
                }
            });
        
        /* if(membresia.length===0){
            return res.status(201).json({message: "does not exists"});
        } else {            
            return res.status(200).json(membresia);
        } */

        return res.json(membresia);
        
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

//Membresia por encabezado
export async function delproducto(req, res) {
    const {id} = req.params;
    try {
            await MembresiaProductos.destroy({
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