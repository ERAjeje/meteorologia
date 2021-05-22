import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

import route from './src/routes/routes.js';

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
const __dirname = path.resolve();
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