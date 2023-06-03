import {Sequelize} from 'sequelize'
import { sequelize } from '../database/bd.js'

export const Movimientos = sequelize.define("movimientos", {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    fecha: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    monto:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    concepto: {
        type: Sequelize.STRING,
        allowNull: false        
    },
    tipoMovimiento:{
        type: Sequelize.INTEGER,
        defaultValue: 1 // 1 Ingreso, 2 Egreso 
    },
    observaciones: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})