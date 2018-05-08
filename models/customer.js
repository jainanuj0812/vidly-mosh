const mongoose = require('mongoose');
const Joi = require('joi');

const Customer = mongoose.model('customers', new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isGold: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true,
        minlength: 11,
        maxlength: 20
    }
}));

function validateCustomer(customer) {
    const schema = {
        name: Joi.string().required(),
        isGold: Joi.boolean(),
        phone: Joi.string().min(11).max(20).required()
    };

    return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validate = validateCustomer;