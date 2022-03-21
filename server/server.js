const express = require('express');
const next = require('next');
const path = require('path');

const Router = require('./router');
const Middleware = require('./middleware');

class Server {
  constructor(port) {
    this.port = port;
    this.express = express();
    this.next = next(this.nextOptions);
    this.middleware = new Middleware(this.express);
    this.router = new Router(this.express, this.next);
  };

  nextOptions = { dev: process.env.NODE_ENV !== 'production' };

  async start() {
    await this.next.prepare();
    await this.middleware.init();
    await this.router.init();

    this.server = this.getHttpsServer();
    this.server.listen(this.port);
  }

  getHttpsServer() {
    const fs = require('fs');
    const options = {
      key: fs.readFileSync(path.join(__dirname, 'certificates', 'key.pem'), 'utf8'),
      cert: fs.readFileSync(path.join(__dirname, 'certificates', 'cert.pem'), 'utf8')
    };
    return require('https').createServer(options, this.express);
  };
}

module.exports = Server;