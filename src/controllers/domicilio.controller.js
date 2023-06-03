import { Domicilio } from "../models/Domicilio.js";


// Obtener el total de domicilios
export async function getDomicilios(req, res) {
    try {
        const domicilios = await Domicilio.findAll({
            order:[
                    ['id','DESC']
                ]
        });
        res.json(domicilios);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

// Crear domicilio
export async function createDomicilio(req, res) {
    
    try {        
        let newDomicilio = await Domicilio.create(req.body);
        return res.status(201).json(newDomicilio);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received"); 
}

//Detalles de un domicilio
export async function getDomicilio(req, res) {
    const { id } = req.params;
    try {
        const domicilio = await Domicilio.findByPk(id);

        if(!domicilio)
            return res.status(404).json({message: "Domicilio does not exists"});

        res.json(domicilio);


    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

//Actualizar Domicilio
export const updateDomicilio = async (req, res) => {
    try {
        const { id } = req.params;      
    
        const domicilio = await Domicilio.findByPk(id);
        
        domicilio.set(req.body);


        await domicilio.save();
    
        res.status(200).json(domicilio);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};