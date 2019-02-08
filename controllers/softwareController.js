var Software = require('../models/softwareModel');

exports.softwareCreate = function (req, res) {
    let software = new Software(
        {
            commonName: req.body.commonName,
            primaryOwner: req.body.primaryOwner
        }
    );

    software.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Software Application Created Successfully!')
    })
}

exports.softwareDetails = function (req, res) {
    Software.findById(req.params.id, function (err, software) {
        if (err) {
            return next(err);
        }
        res.send(software);
    })
};

exports.softwareUpdate = function (req, res) {
    Software.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, software) {
        if (err) {
            return next(err);
        }
        res.send('Software Application udpated.');
    });
};

exports.softwareDelete = function (req, res) {
    Software.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }
        res.send('Software Application Deleted Successfully!');
    })
};