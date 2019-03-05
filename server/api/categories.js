const express = require('express')
const { Category, Product } = require('../models/index')
const router = express.Router()
const faker = require('faker')

router.delete('/products/:id', (req, res, next) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => res.sendStatus(204))
})

router.delete('/categories/:id', (req, res, next) => {
    Category.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => res.sendStatus(204))
})

router.get('/categories', (req, res, next) => {
    Category.findAll({include: [Product]})
        .then(data => {
            res.send(data)
        })
})

router.post('/categories/:id/products', (req, res, next) => {
    Product.create({name: faker.commerce.product(), categoryId: req.params.id})
        .then(() => res.sendStatus(201))
})

// Creating a new database entry
router.post('/categories', (req, res, next) => {
    Category.create({name: faker.commerce.department()})
        .then(() => res.sendStatus(201))
})

module.exports = router;
