import { MedioPago } from "../models/MedioPago.js";

// Obtener el total de las medioPagos
export async function getMedioPagos(req, res) {
    try {
        const medioPagos = await MedioPago.findAll({
            atributes: ["id", "name"],
        });
        res.json(medioPagos);
    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
}

// Crear MedioPago
export async function createMedioPago(req, res) {
    //aconst { nit, name, adress, phone, email } = req.body;
    try {        
        let newMedioPago = await MedioPago.create(req.body);
        return res.status(201).json(newMedioPago);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received"); 
}

//Detalles de un MedioPago
export async function getMedioPago(req, res) {
    const { id } = req.params;
    try {
        const medioPago = await MedioPago.findByPk(id);

        if(!medioPago)
            return res.status(404).json({message: "MedioPago does not exists"});

        res.json(medioPago);


    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
}

//Actualizar medioPago
export const updateMedioPago = async (req, res) => {
    try {
        const { id } = req.params;
    
        const medioPago = await MedioPago.findByPk(id);
        
        medioPago.set(req.body);

        await medioPago.save();

        res.status(200).json(medioPago);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//Activar-desctivar MedioPago
export const activMedioPago = async (req, res) => {
    try {
        const { id } = req.params;
        //const { status } = req.body;

        const medioPago = await MedioPago.findByPk(id);
        
        //medioPago.set(req.body);
        medioPago.set({"status": status});

        await medioPago.save();
    
        return res.status(200).json(medioPago);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
