const Sequelize = require('sequelize');

const Place = require('../models/Place');

const databaseConfig = require('../../config/database');

const models = [
    Place
]

class DataBase {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection));
    }
}

module.exports = new DataBase();