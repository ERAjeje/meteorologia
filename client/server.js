/**
 * Código adaptado disponível em https://github.com/bbachi/nextjs-proxy-example
 * Utilizado para configurar proxy em app nextjs
 */
const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require("http-proxy-middleware");
const dotenv = require('dotenv');

/**
 * Faz a leitura do arquivo
 * ".env" por padrão
 */
dotenv.config();

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const apiPaths = {
    '/api': {
        target: 'http://localhost:3001',
        pathRewrite: {
            '^/api': '/api'
        },
        changeOrigin: true
    }
}

const isDevelopment = process.env.NODE_ENV !== 'production'

app.prepare().then(() => {
    const server = express()

    if (isDevelopment) {
        server.use('/api', createProxyMiddleware(apiPaths['/api']));
    }

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
}).catch(err => {
    console.log('Error:::::', err)
});
