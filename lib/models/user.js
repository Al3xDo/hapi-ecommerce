const Schwifty = require('@hapipal/shwifty');
const Joi = require('joi');

class User extends Schwifty.Model {

    static tableName = 'user';

    static joiSchema = Joi.object({
        id: Joi.number().integer().greater(0),
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.binary(),
        image: Joi.string().uri().empty('').allow(null).default(null)
    });
}

module.exports = User;
