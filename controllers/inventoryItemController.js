var InventoryItem = require('../models/inventoryItemModel');

exports.inventoryItemCreate = function (req, res) {

    let inventoryItem = new InventoryItem(
        {
            collectorInstanceId: process.env.INSTANCE_ID,
            commonName: req.body.commonName,
            primaryOwner: req.body.primaryOwner,
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
        var appList = {};

        inventoryItems.forEach(function(inventoryItem){
            appList[inventoryItem.commonName] = inventoryItem;
        });

        res.send(appList)
    });
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