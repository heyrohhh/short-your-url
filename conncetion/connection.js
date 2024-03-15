const mongoose = require('mongoose');

async function connectionMongo(url){
    return mongoose.connect(url);
}

module.exports = {
    connectionMongo,
}