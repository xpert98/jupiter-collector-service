const fs = require('fs');
var jwt = require('jsonwebtoken');

exports.validateAuth = function(req, res, next) {

    let jwtSecret = '';

    if (!process.env.JWT_SECRET) {
        jwtSecret = fs.readFileSync(process.env.JWT_SECRET_FILE);
    }
    else {
        jwtSecret = process.env.JWT_SECRET;
    }

    let authToken = req.headers['authorization'];

    if (authToken) {
        if (authToken.startsWith('Bearer ')) {
            authToken = authToken.split(" ")[1];

            jwt.verify(authToken, jwtSecret, (err, decoded) => {
                if (err) {
                    return res.status(401).json({message: 'Access Denied: ' + err});
                } else {
                    req.decoded = decoded;    
                    next();
                }
            });

        } else {

            res.status(401).json({message: 'Access Denied: Bearer missing'});

        }
    }
    else {
        return res.status(401).json({message: 'Access Denied: Auth token missing'});
    }
}