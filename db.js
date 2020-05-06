const fs = require('fs');
const mongoose = require('mongoose');

let mongoPassword = '';

if (!process.env.MONGO_PASSWORD) {
    mongoPassword = fs.readFileSync(process.env.MONGO_PASSWORD_FILE);
}
else {
    mongoPassword = process.env.MONGO_PASSWORD;
}

let dburl = 'mongodb://' + process.env.MONGO_USERNAME + ':' + mongoPassword + '@' + process.env.MONGO_HOST + ':' + process.env.MONGO_PORT + '/' + process.env.MONGO_COLLECTION;

let options = {
    useNewUrlParser: true,
    autoReconnect: true,
    reconnectTries: 60,
    reconnectInterval: 500,
    connectTimeoutMS: 12000
};

mongoose.connect(dburl, options);

mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));