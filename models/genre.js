const mongoose = require('mongoose');
const Joi = require('joi')

const Genre = mongoose.model('genres', new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}));

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(genre, schema);
}

exports.Genre = Genre;
exports.validate = validateGenre;