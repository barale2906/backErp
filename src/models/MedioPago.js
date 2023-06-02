import {Sequelize} from 'sequelize'
import { sequelize } from '../database/bd.js'

export const MedioPago = sequelize.define("medioPagos", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status:{
        type: Sequelize.INTEGER,
        defaultValue: 1 // 1 activo, 2 inactivo
    }
});