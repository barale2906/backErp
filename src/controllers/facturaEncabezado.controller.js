import { Op } from "sequelize";
import { Bodegas } from "../models/Bodega.js";
import { MedioPago } from "../models/MedioPago.js";
import { FacturaEncabezado } from "../models/FacturaEncabezado.js";
import { Users } from "../models/User.js";
import { FacturaDetalle } from "../models/FacturaDetalle.js";


// Obtener el total de los FacturaEncabezados
export async function getFacturaEncabezados(req, res) {
    try {
      const facturaEncabezados = await FacturaEncabezado.findAll({
        include:[{model:Users}, {model:Bodegas}, {model:MedioPago}],
        
      });
      res.json(facturaEncabezados);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
 
// Obtener FacturaEncabezados en un periódo
export async function getFacturaEncaRango(req, res) {
  const { inicio,fin } = req.params;
  try {
    const facturaEncabezados = await FacturaEncabezado.findAll({
      include:[{model:Users}, {model:Bodegas}],
      where:{
        createdAt:{
          [Op.gte]:inicio,
          [Op.lte]:fin
          
        }
      }
    });
    res.status(201).json(facturaEncabezados);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// Crear FacturaEncabezado
export async function createFacturaEncabezado(req, res) {
    //const { code, name, description, unit, imagen } = req.body;
    try {        
        let newFacturaEncabezado = await FacturaEncabezado.create(req.body);
        return res.status(201).json(newFacturaEncabezado);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received");
}
 
//Detalles de un FacturaEncabezado por usuario
export async function getFacturaEncabezado(req, res) {
    const { id } = req.params;
    try {
      const facturaEncabezado = await FacturaEncabezado.findAll({
        include:[{model:Bodegas}],     
        where: {
          "userId":id,
          "status":1
        }
      })

      res.json(facturaEncabezado);


    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

//Detalles de un FacturaEncabezado por comisionista
export async function getFacturaEncabezadoComi(req, res) {
  const { comiId } = req.params;
  try {
    const facturaEncabezado = await FacturaEncabezado.findAll({
      include:[{model:FacturaDetalle}],
      order:[                    
          ['id','ASC']
      ],      
      where: {
        comiId
      }
    })
    res.json(facturaEncabezado);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// Detalles encabezado por ID
export async function getEncabezadoId(req, res){
  const {id}= req.params
  try{
    const facturaEncabezado = await FacturaEncabezado.findOne({
      where: {
        id
      }
    })

    res.json(facturaEncabezado);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });

  }
}
//Actualizar FacturaEncabezado
export const updateFacturaEncabezado = async (req, res) => {
    try {
      const { id } = req.params;
      //const { code, description, unit, imagen } = req.body;  
      const facturaEncabezado = await FacturaEncabezado.findByPk(id);        
        facturaEncabezado.set(req.body);      
      await facturaEncabezado.save();
  
      res.json(facturaEncabezado);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Eliminar encabezado
  
export async function deleteFacturaEncabezado(req, res) {
    const { id } = req.params;
    try {
      await FacturaEncabezado.destroy({
        where: {
          id,
        },
      });
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}
