const Sequelize = require('sequelize');

class Place extends Sequelize.Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            country: Sequelize.STRING(4)
        }, {
            sequelize,
            modelName: 'place',
            timestamps: true
        });
        return this;
    }
}



module.exports = Place;