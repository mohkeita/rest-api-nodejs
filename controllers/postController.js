const validationHandler = require('../validations/validationHandler');

exports.index = (req, res) => {
    res.send({ message: "hi" });
};

exports.store = (req, res, err) => {
    try {
        validationHandler(req);

        res.send({ message: "The name is" + req.body.name });

    } catch (err) {
        next(err)
    }
};