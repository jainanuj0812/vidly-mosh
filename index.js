const genres = require('./routes/genres');
const customers = require('./routes/customers');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://anuj_jain:'+ process.env.mongo_cluster_key +'@clusteruva-4ism7.mongodb.net/vidly')
    .then(() => {
        console.log('Connected to db')
    })
    .catch((err) => {
        console.log('Error while connecting DB...', err)
    });

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));