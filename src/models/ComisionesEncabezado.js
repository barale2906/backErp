import {Sequelize} from 'sequelize'
import { sequelize } from '../database/bd.js'


export const ComisionesEncabezado = sequelize.define("comisionesEncabezado", {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    percentage:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    status:{
        type: Sequelize.INTEGER,
        defaultValue: 1 // 1 Creada, 2 Activa, 3 Inactiva 
    }
});