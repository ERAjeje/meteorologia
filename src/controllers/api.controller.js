

const apiController = {
    'v1': (_, res) => {
        res.send({
            message: 'API is running'
        })
    }
};

module.exports = apiController;