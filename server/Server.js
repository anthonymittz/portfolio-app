const path = require('path');
const { parse } = require('url');
require('colors');
const initNext = require('./modules/Next');
const initExpress = require('./modules/Express');
const createHttpsServer = require('./modules/Https');

class Server {
  constructor(port, mode) {
    this.port = port;
    this.mode = mode;
    this.dev = this.mode === 'development';
    this.host = this.dev ? 'localhost' : '';
    this.next = initNext(this.dev, this.host, this.port);
    this.express = initExpress();
    this.https = createHttpsServer(this.express, this.dev);
  }

  async listen() {}

  static log(message) {
    console.log('[server]'.cyan, message);
  }

  static error(message) {
    console.error('[server]'.bgRed.white.bold, 'Error with the message:', `"${message}"`);
  }
}

module.exports = Server;
