import {DataTypes} from 'sequelize'
import { sequelize } from '../database/bd.js'
import { FacturaDetalle } from './FacturaDetalle.js';
import { Domicilio } from './Domicilio.js';


export const FacturaEncabezado = sequelize.define("facturaEncabezados", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    documento: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipoDocumento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    adress: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull: true
    },
    totalFactura:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    impuestos:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    descuentos:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    comiId:{
        type: DataTypes.STRING,
        default: 0 // Si esta en cero no aplico comisión, si esta solo el número esta sin pagar la comisión, si esta acompañada de una P ya se pago
    },
    domiId:{
        type: DataTypes.INTEGER,
        default: 0 //0 no requirio domicilio, diferente tarifa aplicable
    },
    domiName:{
        type: DataTypes.TEXT,
        default: "No Aplico Domicilio"
    },
    domiTarifa:{
        type: DataTypes.DOUBLE,
        default: 0
    },    
    status:{
        type: DataTypes.INTEGER,
        defaultValue: 1 // 1 Creada, numero diferente corresponde al recibo de cierre de caja
    }
});

// Activar la relación con el detalle de la factura
FacturaEncabezado.hasMany(FacturaDetalle, {
    foreignKey: 'factId',
    sourceKey: 'id'
})


FacturaDetalle.belongsTo(FacturaEncabezado,{
    foreignKey: 'factId',
    targetId: 'id'
})

// Activar la relación con domicilios
FacturaEncabezado.hasMany(Domicilio, {
    foreignKey: 'factId',
    sourceKey: 'id'
})


Domicilio.belongsTo(FacturaEncabezado,{
    foreignKey: 'factId',
    targetId: 'id'
})