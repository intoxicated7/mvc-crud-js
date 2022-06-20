const Post = require('../models/post')

const create = (req, res) => {
	const { title, body } = req.body;
	const post = new Post({ title, body });
	post
		.save()
		.then((post) => res.json(post));
}

const getAll = (req, res) => {
	Post
		.find()
		.then((posts) => res.json(posts));
}

const getOne = (req , res) => {
	const { id } = req.params;
	Post
		.findById(id)
		.then((post) => res.json(post));
}

const editPost = (req, res) => {
	const { id } = req.params;
	const { title, body } = req.body;
	Post
		.findByIdAndUpdate(id, { title, body }, { new: true })
		.then((post) => res.json(post));
}

const deletePost = (req, res) => {
	const { id } = req.params;
	Post
		.findByIdAndDelete(id)
		.save()
		.then((post) => res.json(post));
}

module.exports = {
	create,
	getAll,
	getOne,
	editPost,
	deletePost
}