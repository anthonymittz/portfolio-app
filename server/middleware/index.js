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
    this.log("Initialized");
  };

  initErrorHandler() {
    this.express.use(async (err, req, res, next) => {
      this.error(err);
      return next(err);
    })
  };

  log(message) {
    console.log( "\x1b[36m[Server.Middleware]\x1b[0m -", message );
  };

  error(message) {
    console.error( "\x1b[31m[Server.Middleware]\x1b[0m -", message );
  };
};

module.exports = Middleware;