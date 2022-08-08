const Schmervice = require('@hapipal/schmervice');

class MyService extends Schmervice.Service {

    constructor(server, options) {

        super(server, options);

    }

    async myFunction(server, options) {

        return;
    }
}

module.exports = MyService;
