const express = require('express');
const routes = require('./routes/index');
const mongoose = require('mongoose');

const app = express();

app.use(express.json())

const db = 'mongodb+srv://<login>>:<password>@cluster0.likro.mongodb.net/node-express-mongo?retryWrites=true&w=majority';

mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((res) => console.log('Connected to DB'))
	.catch((error) => console.log(error));

const PORT = 3000;

app.listen(PORT, (error) => {
	error ? console.log(error) : console.log('listening port 3000');
});

app.use(routes);

app.use((req, res) => {
	res
		.status(404)
});