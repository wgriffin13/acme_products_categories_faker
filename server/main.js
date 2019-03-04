const server = require('./index')
const {syncAndSeed} = require('./models/index')

const PORT = process.env.PORT || 3000

syncAndSeed()
    .then(() => {
        server.listen(PORT, () => {
           console.log(`Server listening in port ${PORT}`);
        });
    })

