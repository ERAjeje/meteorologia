const Sequelize = require('sequelize');
const Place = require('../app/models/Place');
const axios = require('axios');


class PlaceController {
    async store(req, res) {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(req.body.name)}&appid=${process.env.api_key}&units=metric&lang=pt_br`);

            const [place, created] = await Place.findOrCreate({
                where: {
                    name: response.data.name,
                    country: response.data.sys.country
                }
            });

            if (!created) {
                const now = new Date();
                const newPlace = await Place.update({ name: place.name }, {
                    where: {
                        name: place.name
                    }
                });
            }
            return res.json(response.data);
        } catch (error) {
            return res.status(400).json({ error });
        }
    }

    async getAll(req, res) {
        try {
            const data = await Place.findAll({ order: [['updated_at', 'DESC']], limit: 5 });
            return res.json(data);
        } catch (error) {
            return res.status(400).json({ error });
        }
    }
}

module.exports = new PlaceController();