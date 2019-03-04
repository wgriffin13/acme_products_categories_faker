const path = require('path')
const express = require('express')
const volleyball = require('volleyball')
const app = express()
module.exports = app

// Logging middleware
app.use(volleyball)

// Body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Static middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// Routes that will be accessed via AJAX should be prepended with
// /api so they are isolated from our GET /* wildcard.
app.use('/api', require('./api'))

// For all GET requests that aren't to an API route,
// we will send the index.html!
app.get('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'))
  })


module.exports = app;
