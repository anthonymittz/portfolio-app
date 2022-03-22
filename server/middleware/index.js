const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

class Middleware {
  constructor(express) {
    this.express = express;
    this.urlEncodedOptions = { extended: false };
  };

  async init() {
    this.express.use(express.json());
    this.express.use(express.urlencoded(this.urlEncodedOptions));
    this.express.use(favicon(path.join(__dirname, '..', '..', 'public', 'favicon.ico')));
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