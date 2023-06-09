import {Sequelize} from 'sequelize'
import { sequelize } from '../database/bd.js'

export const Domicilio = sequelize.define("domicilios", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    fechaRecoleccion: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    montoFactura:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    fechaLegaliza: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    montoLegaliza:{
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    observaciones: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    facturaProveedor:{
        type: Sequelize.STRING,
        allowNull: true 
    },
    tarifaDomi:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    status:{
        type: Sequelize.INTEGER,
        defaultValue: 1 // 1 creada, 2 recogida, 3 legalizada, 4 paga, 5 anulada, 6 abonada
    }
});