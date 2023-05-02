import {Sequelize} from 'sequelize'
import { sequelize } from '../database/bd.js'

export const MembresiaUsuarios = sequelize.define("membresiaUsuarios", {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    documento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    tipoDocumento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    adress: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email:{
        type: Sequelize.STRING,
        allowNull: true
    },
    status:{
        type: Sequelize.INTEGER,
        defaultValue: 1 // 1 Activa, 2 Inactiva 
    }
})