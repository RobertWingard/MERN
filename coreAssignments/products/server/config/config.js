const mongoose = require('mongoose');

module.exports = (DB_NAME) => {
    mongoose.connect(`mongodb://localhost/${DB_NAME}`)
    .then(() => console.log(`connected to ${DB_NAME}`))
    .catch(() => console.log(`cannot connect to ${DB_NAME}`, err))
}