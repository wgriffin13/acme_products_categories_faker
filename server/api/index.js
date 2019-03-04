const router = require('express').Router()
// connect your API routes here!

router.use('/', require('./categories') )

module.exports = router
