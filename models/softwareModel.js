const mongoose = require('mongoose');
var Schema = mongoose.Schema;

let softwareSchema = new Schema({
    commonName: {type: String, required: true},
    aliases: {type: String, required: false},
    description: {type: String, required: false},
    repo: {type: String, required: false},
    primaryLanguage: {type: String, required: false},
    secondaryLanguages: {type: String, required: false},
    type: {type: String, required: false},
    primaryOwner: {type: String, required: true},
    secondaryOwners: {type: String, required: false},
    exposure: {type: String, required: false},
    riskLevel: {type: String, required: false},
    regulations: {type: String, required: false},
    age: {type: Number, required: false},
    lifecycleStage: {type: String, required: false},
    lastDeployDate: {type: Date, required: false},
});


// Export the model
module.exports = mongoose.model('software', softwareSchema);