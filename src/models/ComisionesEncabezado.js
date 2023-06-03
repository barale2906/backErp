import {Sequelize} from 'sequelize'
import { sequelize } from '../database/bd.js'
import { ComisionesProducto } from './ComisionesProducto.js';
import { MembresiaUsuarios } from './MembresiaUsuarios.js';
import { ComisionesUsuario } from './ComisionesUsuario.js';


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

// Activar la relación con productos Comisiones
ComisionesEncabezado.hasMany(ComisionesProducto, {
    foreignKey: 'comiEncaId',
    sourceKey: 'id'
})

ComisionesProducto.belongsTo(ComisionesEncabezado,{
    foreignKey: 'comiEncaId',
    targetId: 'id'
})

// Activar la relación con Usuarios comision
ComisionesEncabezado.hasMany(ComisionesUsuario, {
    foreignKey: 'comiEncaId',
    sourceKey: 'id'
})

ComisionesUsuario.belongsTo(ComisionesEncabezado,{
    foreignKey: 'comiEncaId',
    targetId: 'id'
});