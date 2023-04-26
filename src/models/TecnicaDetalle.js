import {DataTypes} from 'sequelize'
import { sequelize } from '../database/bd.js'
import { Inventario } from './Inventario.js';


export const TecnicaDetalle = sequelize.define("tecnicaDetalles", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    cum: {
        type: DataTypes.STRING,
        allowNull: true
    },
    generico: {
        type: DataTypes.STRING,
        allowNull: true
    },
    comercial: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    lote: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    expiration: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    invima: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    tipoproducto: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    etiquetado: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    embalajePrimario: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    embalajeSecundario: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    condicionesPresentacionLiquida: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    cierresHermeticos: {
        type: DataTypes.TEXT,
        allowNull: true
    }
    ,
    condicionesDM: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    observations: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cantidad:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    costo:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    cumple:{
        type: DataTypes.INTEGER,
        defaultValue: 1 // 1 cumple, 2 No Cumple
    }
});

// cargar registro en inventarios
TecnicaDetalle.afterCreate((detalle)=>{
   

    const creado = Inventario.create({
        lote: detalle.lote,
        expiration: detalle.expiration,
        cantidad: detalle.cantidad,
        costo: detalle.costo,
        observations: detalle.observations,
        idTecnicalDetalle: detalle.id,
        bodegaId: detalle.bodegaId,
        prodId: detalle.prodId,
        encabId: detalle.encabId
    });

})
