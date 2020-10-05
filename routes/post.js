const express = require("express");
const router = express.Router();
const uploadImage = require("../middlewares/multer");

const { hasDescription } = require('../validations/validators');
const postController = require('../controllers/postController');

router.get('/', postController.index);
router.get('/:id', postController.show);
router.post('/',
    uploadImage('posts').single('image'),
    hasDescription,
    postController.store);
router.patch("/:id", hasDescription, postController.update);

module.exports = router;