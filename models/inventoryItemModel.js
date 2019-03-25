const mongoose = require('mongoose');
var Schema = mongoose.Schema;

let inventorySchema = new Schema({
    collectorInstanceId: {type: String, required: true},
    commonName: {type: String, required: true},
    aliases: {type: String, required: false},
    description: {type: String, required: false},
    codeRepoUrl: {type: String, required: false},
    binaryRepoUrl: {type: String, required: false},
    primaryLanguage: {type: String, required: false},
    secondaryLanguages: {type: String, required: false},
    type: {type: String, required: false},
    primaryOwner: {type: String, required: true},
    secondaryOwners: {type: String, required: false},
    businessUnit: {type: String, required: false},
    exposure: {type: String, required: false},
    numUsers: {type: Number, required: false},
    dataClassification: {type: String, required: false},
    deploymentEnv: {type: String, required: false},
    deploymentEnvUrl: {type: String, required: false},
    riskLevel: {type: String, required: false},
    regulations: {type: String, required: false},
    chatChannel: {type: String, required: false},
    agileScrumBoardUrl: {type: String, required: false},
    buildServerUrl: {type: String, required: false},
    age: {type: Number, required: false},
    lifecycleStage: {type: String, required: false},
    lastDeployDate: {type: Date, required: true}
});


// Export the model
module.exports = mongoose.model('inventory', inventorySchema);