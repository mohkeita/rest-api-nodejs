const validationHandler = require('../validations/validationHandler');

exports.index = async (req, res) => {

};


exports.store = (req, res, next) => {
    try {
        validationHandler(req);

        res.send({ message: "The name is" + req.body.name });

    } catch (err) {
        next(err)
    }
};