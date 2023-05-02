import {Sequelize} from 'sequelize'
import { sequelize } from '../database/bd.js'

export const MembresiaProductos = sequelize.define("membresiaProductos", {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    percentage:{
        type: Sequelize.DOUBLE,
        allowNull: false
    }

})