const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

require('./src/app/database/index');
const route = require('./src/routes/routes');


/**
 * Leitura do arquivo .env e inicialização do app express
 */
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/**
 * Vinculando o nextjs ao app
 */
app.use(express.static(path.join(__dirname, 'client/.next')));

/**
 * Rota raiz
 */
app.use('/api', route);

/**
 * Inicialização do server
 */
const APP_PORT = process.env.PORT || 3001;
app.listen(APP_PORT, () => {
    console.log(`Server is running in port ${APP_PORT}`);
});