const express = require('express');
const next = require('next');
const path = require('path');

const Router = require('./router');
const Middleware = require('./middleware');

class Server {
  constructor(port, mode) {
    this.port = port;
    this.mode = mode;
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

    this.mode === "development" 
      ? this.startHttpsServer() 
      : this.startExpressServer();
  }

  async startHttpsServer() {
    const fs = require('fs');
    const options = this.mode === "development" ? {
      key: fs.readFileSync(path.join(__dirname, 'certificates', 'key.pem'), 'utf8'),
      cert: fs.readFileSync(path.join(__dirname, 'certificates', 'cert.pem'), 'utf8')
    } : {};
    await require('https').createServer(options, this.express).listen(this.port);
    this.callback('HTTPS');
  };

  startExpressServer() {
    this.express.listen(this.port, this.callback('Express'));
  }

  callback(type) {
    this.log(`${type} server is listening on ${this.port} in ${this.mode} mode.`);
  }

  log(message) {
    console.log( "\x1b[36m[Server]\x1b[0m -", message );
  }
}

module.exports = Server;