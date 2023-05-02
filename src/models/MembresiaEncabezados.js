import {Sequelize} from 'sequelize'
import { sequelize } from '../database/bd.js'
import { MembresiaUsuarios } from './MembresiaUsuarios.js';
import { MembresiaProductos } from './MembresiaProductos.js';

export const MembresiaEncabezados = sequelize.define("membresiaEncabezados", {
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

// Activar la relación con UsuariosMembresia
MembresiaEncabezados.hasMany(MembresiaUsuarios, {
    foreignKey: 'membreEncaId',
    sourceKey: 'id'
})

MembresiaUsuarios.belongsTo(MembresiaEncabezados,{
    foreignKey: 'membreEncaId',
    targetId: 'id'
});

// Activar la relación con productos Membresia
MembresiaEncabezados.hasMany(MembresiaProductos, {
    foreignKey: 'membreEncaId',
    sourceKey: 'id'
})

MembresiaProductos.belongsTo(MembresiaEncabezados,{
    foreignKey: 'membreEncaId',
    targetId: 'id'
})