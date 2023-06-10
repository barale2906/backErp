import {Sequelize} from 'sequelize'
import { sequelize } from '../database/bd.js'
import { Domicilio } from './Domicilio.js';

export const DomiciliosTarifas = sequelize.define("domiciliosTarifas", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    detalle: {
        type: Sequelize.TEXT,
        allowNull: false
    },    
    tarifa:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    
    status:{
        type: Sequelize.INTEGER,
        defaultValue: 1 // 1 activa 2 inactiva
    }
});

// Activar la relación con domicilios
DomiciliosTarifas.hasMany(Domicilio, {
    foreignKey: 'domiTarifaId',
    sourceKey: 'id'
})

Domicilio.belongsTo(DomiciliosTarifas,{
    foreignKey: 'domiTarifaId',
    targetId: 'id'
})