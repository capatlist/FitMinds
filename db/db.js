const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://kshitij1097:papaandmama@fitness-app.p3lsoxd.mongodb.net/').on(
    'open', () => {
        console.log('connected to database');
    }
).on('error', (error) => {
    console.log(`Error connecting to database: ${error}`);
}) 

module.exports = connection;