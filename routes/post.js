const express = require("express");
const router = express.Router();
const { hasName } = require('../validations/validators');
const postController = require('../controllers/postController');

router.get('/', postController.index);
router.post('/', hasName, postController.store);

module.exports = router;