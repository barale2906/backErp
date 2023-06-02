import {Sequelize} from 'sequelize'
import { sequelize } from '../database/bd.js'

export const ComisionesProducto = sequelize.define("comisionesProducto", {
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