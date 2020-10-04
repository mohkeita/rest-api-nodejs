const express = require("express");
const router = express.Router();
const uploadImage = require("../middlewares/multer");

const { hasDescription } = require('../validations/validators');
const postController = require('../controllers/postController');

router.get('/', postController.index);
router.post('/',
    uploadImage('posts').single('image'),
    hasDescription,
    postController.store);

module.exports = router;