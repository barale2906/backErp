import Sequelize from 'sequelize'

export const sequelize = new Sequelize('consultorio', 'postgres', 'mysql', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases:0,
    timezone:"-05:00"
  });