const express = require('express')

function middleware() {
    const router = express.Router('/')

    router.get('/clear-cookies', (req, res) => res.render('util/clear'))
    router.get('/clear-cookies/success', (req, res) => res.render('util/clear-success'))

    return router
}

function initialize(app) {
    app.use('/', middleware())
}

module.exports = {
    middleware,
    initialize
}