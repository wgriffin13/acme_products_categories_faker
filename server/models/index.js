const conn = require('./conn')
const Category = require('./category')
const Product = require('./product')
const faker = require('faker')

Product.belongsTo(Category)
Category.hasMany(Product)

const syncAndSeed = () => {
    return conn.sync({force: true})
        .then( () => {
            console.log('\n----database seeding----\n')
            Promise.all([Category.create({name: faker.commerce.department()}),
                Category.create({name: faker.commerce.department()}),
                Category.create({name: faker.commerce.department()})])
                .then(dbenteries => {
                    Promise.all([Product.create({name: faker.commerce.product(), categoryId: dbenteries[0].id}),
                    Product.create({name: faker.commerce.product(), categoryId: dbenteries[1].id}),
                    Product.create({name: faker.commerce.product(), categoryId: dbenteries[2].id})])
                })
        })
};

//syncAndSeed();

module.exports = {
    conn,
    Category,
    Product,
    syncAndSeed
}
