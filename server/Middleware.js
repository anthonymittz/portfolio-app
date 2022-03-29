const { json, urlencoded } = require('express');

class Middleware {
  constructor(express) {
    this.express = express;
  }

  urlEncodedOptions = { extended: false };

  async init() {
    this.express.use(json());
    this.express.use(urlencoded(this.urlEncodedOptions));
  }

  errorHandeler = (err, req, res, next) => {
    return next(err);
  };
}

module.exports = Middleware;
