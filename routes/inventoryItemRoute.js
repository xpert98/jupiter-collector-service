var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

router.use((req, res, next) =>{

    let authToken = req.headers['authorization'];

    if (authToken.startsWith('Bearer ')) {
        authToken = authToken.split(" ")[1];

        jwt.verify(authToken, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                //return res.json({ message: 'invalid token' });
                return res.status(401).json({message: 'Access Denied'});
            } else {
                req.decoded = decoded;    
                next();
            }
        });

    } else {

        res.status(401).json({message: 'Access Denied'});

    }

});

var inventoryItemController = require('../controllers/inventoryItemController');

router.get('/', inventoryItemController.inventoryCollectorDetails);

router.post('/create', inventoryItemController.inventoryItemCreate);

router.get('/list', inventoryItemController.inventoryAllItems);

router.get('/:id', inventoryItemController.inventoryItemDetails);

router.put('/:id/update', inventoryItemController.inventoryItemUpdate);

router.delete('/:id/delete', inventoryItemController.inventoryItemDelete);

module.exports = router;