const express = require('express');
const router = express.Router();
const createPath = require('../helpers/create-path');
const PostController = require('../controllers/postController');

router.get('/', function (req, res) {
	res.sendFile(createPath('index'));
});


router.post('/new-post', PostController.create);

router.get('/posts', PostController.getAll);

router.get('/posts/:id', PostController.getOne);

router.put('/edit/:id', PostController.editPost);

router.delete('/delete/:id', PostController.deletePost);

module.exports = router;