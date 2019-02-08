var express = require('express');
var router = express.Router();

var softwareController = require('../controllers/softwareController');

router.post('/create', softwareController.softwareCreate);

router.get('/:id', softwareController.softwareDetails);

router.put('/:id/update', softwareController.softwareUpdate);

router.delete('/:id/delete', softwareController.softwareDelete);

module.exports = router;