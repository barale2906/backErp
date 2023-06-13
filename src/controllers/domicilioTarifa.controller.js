import { DomiciliosTarifas } from "../models/DomicilioTarifa.js";

// Obtener el total de domiciliosTarifa
export async function getDomiciliosTarifas(req, res) {
    try {
        const domiciliosTarifa = await DomiciliosTarifas.findAll({
            order:[
                    ['id','DESC']
                ]
        });
        res.json(domiciliosTarifa);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

//Obtener domicilios Tarifa por estado
export async function getDomiciliosTarifaStatus(req, res) {
    const { status } = req.params;
    try {
        const domiciliosTarifa = await DomiciliosTarifas.findAll({
            where:{
                status
            },
            order:[
                    ['tarifa','ASC']
                ]
        });
        res.json(domiciliosTarifa);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

// Crear domicilioTarifa
export async function createDomiciliosTarifa(req, res) {
    
    try {        
        let newDomiciliosTarifas = await DomiciliosTarifas.create(req.body);
        return res.status(201).json(newDomiciliosTarifas);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received"); 
}

//Detalles de un domicilioTarifa
export async function getDomiciliosTarifa(req, res) {
    const { id } = req.params;
    try {
        const domicilioTarifa
        = await DomiciliosTarifas.findByPk(id);

        if(!domicilioTarifa)
            return res.status(404).json({message: "DomiciliosTarifas does not exists"});

        res.json(domicilioTarifa);


    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

//Actualizar DomiciliosTarifas
export const updateDomiciliosTarifas = async (req, res) => {
    try {
        const { id } = req.params;      
    
        const domicilioTarifa = await DomiciliosTarifas.findByPk(id);
        
        domicilioTarifa.set(req.body);


        await domicilioTarifa.save();
    
        res.status(200).json(domicilioTarifa);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//Activar-desctivar Tarifa
export const activTarifa = async (req, res) => {
    try {
        const { id, status } = req.params;
      //const { status } = req.body;

        const tarifa = await DomiciliosTarifas.findByPk(id);
        
        tarifa.set({"status": status});

        await tarifa.save();

        res.status(200).json(tarifa);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};