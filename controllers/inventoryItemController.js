const fs = require('fs');
var db = require('../db');
var InventoryItem = require('../models/inventoryItemModel');

exports.inventoryItemCreate = function (req, res) {

    let collectorInstanceId = '';

    if (!process.env.INSTANCE_ID) {
        collectorInstanceId = fs.readFileSync(process.env.INSTANCE_ID_FILE);
    }
    else {
        collectorInstanceId = process.env.INSTANCE_ID;
    }

    let inventoryItem = new InventoryItem(
        {
            collectorInstanceId: collectorInstanceId,
            commonName: req.body.commonName,
            aliases: req.body.aliases,
            description: req.body.description,
            codeRepoUrl: req.body.codeRepoUrl,
            binaryRepoUrl: req.body.binaryRepoUrl,
            primaryLanguage: req.body.primaryLanguage,
            secondaryLanguages: req.body.secondaryLanguages,
            type: req.body.type,
            primaryOwner: req.body.primaryOwner,
            secondaryOwners: req.body.secondaryOwners,
            businessUnit: req.body.businessUnit,
            exposure: req.body.exposure,
            numUsers: req.body.numUsers,
            dataClassification: req.body.dataClassification,
            deploymentEnv: req.body.deploymentEnv,
            deploymentEnvUrl: req.body.deploymentEnvUrl,
            riskLevel: req.body.riskLevel,
            regulations: req.body.regulations,
            chatChannel: req.body.chatChannel,
            agileScrumBoardUrl: req.body.agileScrumBoardUrl,
            buildServerUrl: req.body.buildServerUrl,
            age: req.body.age,
            lifecycleStage: req.body.lifecycleStage,
            lastDeployDate: Date.now()
        }
    );

    inventoryItem.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(inventoryItem)
    })
};

exports.inventoryAllItems = function(req, res) {
    InventoryItem.find({}, function(err, inventoryItems) {
        res.send(inventoryItems);
    });
};

exports.inventoryCollectorDetails = function(req, res) {
    var collectorDetails = {"instanceId":collectorInstanceId};
    res.send(collectorDetails);
};

exports.inventoryItemDetails = function (req, res) {
    InventoryItem.findById(req.params.id, function (err, inventoryItem) {
        if (err) {
            return next(err);
        }
        res.send(inventoryItem);
    })
};

exports.inventoryItemUpdate = function (req, res) {
    InventoryItem.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, inventoryItem) {
        if (err) {
            return next(err);
        }
        res.send('Application Inventory Item updated.');
    });
};

exports.inventoryItemDelete = function (req, res) {
    InventoryItem.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }
        res.send('Application Inventory Item Deleted Successfully!');
    })
};