import { MembresiaEncabezados } from "../models/MembresiaEncabezados.js";


// Obtener el total de las membresiaEncabezados
export async function getMembresiaEncabezados(req, res) {
    try {
        const membresiaEncabezados = await MembresiaEncabezados.findAll({
        atributes: ["id", "name"],
        });
        res.json(membresiaEncabezados);
    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
}

// Crear Membresia
export async function createMembresiaEncabezado(req, res) {    
    try {        
        let newMembresia = await MembresiaEncabezados.create(req.body);
        return res.status(201).json(newMembresia);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received"); 
}

//Detalles de una Membresia
export async function getMembresiaEncabezado(req, res) {
    const { id } = req.params;
    try {
        const membresiaEncabezado = await MembresiaEncabezados.findByPk(id);

        if(!membresiaEncabezado)
            return res.status(404).json({message: "MembresiaEncabezado does not exists"});

        res.json(membresiaEncabezado);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

//Actualizar membresiaEncabezado
export const updateMembresiaEncabezado = async (req, res) => {
    try {
        const { id } = req.params;

        const membresiaEncabezado = await MembresiaEncabezados.findByPk(id);
        
        membresiaEncabezado.set(req.body);

        await membresiaEncabezado.save();

        res.status(200).json(membresiaEncabezado);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//Activar-desactivar MembresiaEncabezado
export const activMembresiaEncabezado = async (req, res) => {
    try {
        const { id, status } = req.params;  
        const membresiaEncabezado = await MembresiaEncabezados.findByPk(id);
        
        //membresiaEncabezado.set(req.body);
        membresiaEncabezado.set({"status": status});

        await membresiaEncabezado.save();
    
        return res.status(200).json(membresiaEncabezado);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};