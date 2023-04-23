import Sequelize from 'sequelize'

export const sequelize = new Sequelize('farmacia', 'postgres', 'mysql', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases:0,
    timezone:"-05:00"
  });