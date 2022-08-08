const Joi = require('joi');

module.exports = {
    method: 'GET',
    path: '/',
    handler: async (request, h) => {

        return
    },
    options: {
        validate: {
            params: Joi.object({}),
            query: Joi.object({}),
            payload: Joi.object({})
        }
    }
};
