import Sequelize from 'sequelize';
import DataTypes from 'sequelize';
import Model from 'sequelize';

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    host: process.env.host,
    port: process.env.port_db,
    dialect: 'postgres',
    logging: false
});

export { sequelize, DataTypes, Model };