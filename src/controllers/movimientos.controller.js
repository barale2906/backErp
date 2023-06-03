import { Movimientos } from "../models/Movimientos.js";
import { Users } from "../models/User.js";
import { Op } from "sequelize";
import { MedioPago } from "../models/MedioPago.js";


// Crear Movimientos
export async function createMovimiento(req, res) {
    //const { code, name, description, unit, imagen } = req.body;
    try {        
        let newMovimiento = await Movimientos.create(req.body);
        return res.status(201).json(newMovimiento);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    //res.json("received");
}

//Actualizar Movimientos
export const updateMovimiento = async (req, res) => {
    try {
        const { id } = req.params;

        const movimiento = await Movimientos.findByPk(id);        
            movimiento.set(req.body);      
        await movimiento.save();
    
        res.status(200).json(movimiento);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//Selecciona movimientos por medio de pago
export async function getMovimientosTodos(req, res) {
    
    try {
        const movimiento = await Movimientos.findAll({
            include:[{model:MedioPago}], 
        order:[
            ['fecha','DESC']
            ]
        })
        res.status(201).json(movimiento);
    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
}

//Selecciona movimientos por medio de pago
export async function getMovimientosMovimiento(req, res) {
    const { id } = req.params;
    try {
        const movimiento = await Movimientos.findAll({
            include:[{model:MedioPago}], 
        order:[
            ['fecha','DESC']
            ],    
        where: {
            "medioId":id
        }
        })
        res.status(201).json(movimiento);
    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
}

//Selecciona movimientos por usuario
export async function getMovimientoUser(req, res) {
    const { id } = req.params;
    try {
        const movimiento = await Movimientos.findAll({
            include:[{model:MedioPago}, {model:Users}],
        order:[
            ['fecha','DESC']
            ],
        where: {
            "userId":id,
        }
        })
        res.status(201).json(movimiento);
    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
} 

//Seleccionar movimientos por rango de fecha y tipo de ingreso/Egreso
export async function getMovimientoEspecifico(req, res) {
    const { medio,inicio,fin,tipo } = req.params;
    try {
        const movimiento = await Movimientos.findAll({
        include:[{model:MedioPago}, {model:Users}],
        order:[
            ['fecha','DESC']
            ],     
        where: {
            "medioId":medio,        
            "tipoMovimiento":tipo,
            createdAt:{
            [Op.gte]:inicio,
            [Op.lte]:fin          
            }
        }
        })
        res.status(201).json(movimiento);
    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
} 
