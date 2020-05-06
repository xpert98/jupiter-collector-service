var express = require('express');
var routerUtil = require('../routerUtil');
var router = express.Router();

router.use((req, res, next) =>{

    routerUtil.validateAuth(req, res, next);

});

var inventoryItemController = require('../controllers/inventoryItemController');

router.get('/', inventoryItemController.inventoryCollectorDetails);

router.post('/create', inventoryItemController.inventoryItemCreate);

router.get('/list', inventoryItemController.inventoryAllItems);

router.get('/:id', inventoryItemController.inventoryItemDetails);

router.put('/:id/update', inventoryItemController.inventoryItemUpdate);

router.delete('/:id/delete', inventoryItemController.inventoryItemDelete);

module.exports = router;