const mongoose = require('mongoose');
let dburl = 'mongodb://jupiter:jup1t3r@192.168.2.70:27017/jupiter';
let mongoDB = process.env.MONGODB_URI || dburl;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));