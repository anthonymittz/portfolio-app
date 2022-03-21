const { json, urlencoded } = require('express');

class Middleware {
  constructor(express) {
    this.express = express;
    this.urlEncodedOptions = { extended: false };
  };

  async init() {
    this.express.use(json());
    this.express.use(urlencoded(this.urlEncodedOptions));
    this.initErrorHandler();
  };

  initErrorHandler() {
    this.express.use(async (err, req, res, next) => {
      console.error(`[Middleware].ErrorHandler: ${err}`);
      return next(err);
    })
  };
};

module.exports = Middleware;