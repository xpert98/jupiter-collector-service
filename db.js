const mongoose = require('mongoose');

let dburl = 'mongodb://' + process.env.MONGO_USERNAME + ':' + process.env.MONGO_PASSWORD + '@' + process.env.MONGO_HOST + ':' + process.env.MONGO_PORT + '/' + process.env.MONGO_COLLECTION;

let mongoDB = process.env.MONGODB_URI || dburl;

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));