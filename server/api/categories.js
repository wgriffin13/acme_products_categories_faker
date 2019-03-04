const express = require('express')
const { Category } = require('../models/index')
const router = express.Router()

router.get('/categories', (req, res, next) => {
    Category.findAll()
        .then(data => {
            res.send(data)
        })
})

// router.get('/albums/:id', (req, res, next) => {
//     Album.findOne({
//         where: {id: req.params.id},
//         include: [{model: Artist}, {model: Song}]
//     })
//     .then(data => {
//         res.send(data)
//     })
// })

module.exports = router;
