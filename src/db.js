const mongoose = require('mongoose');
const db = mongoose.connection;

function connect() {
    mongoose.connect('mongodb://localhost/onlineStore', {useNewUrlParser: true , useFindAndModify: false});
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', () => {
        console.log('connected to db');
        
    });
}

module.exports = {
    connect: connect,
    db: db
};