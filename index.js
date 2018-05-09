const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const users = require('./routes/users');
const auth = require('./routes/auth')

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

mongoose.connect('mongodb://localhost/vidly')
    .then(() => {
        console.log('Connected to db')
    })
    .catch((err) => {
        console.log('Error while connecting DB...', err)
    });

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));