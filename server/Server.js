require('colors');
const Router = require('./Router');
const Middleware = require('./Middleware');
const initNext = require('./modules/Next');
const initExpress = require('./modules/Express');
const createHttpsServer = require('./modules/Https');

class Server {
  constructor(port, mode) {
    this.port = port;
    this.mode = mode;
    this.dev = mode === 'development';
    this.host = this.dev ? 'localhost' : '';

    this.next = initNext(this.dev, this.host, this.port);
    this.express = initExpress();
    this.https = createHttpsServer(this.express, this.dev);

    this.router = new Router(this.express, this.next);
    this.middleware = new Middleware(this.express);
  }

  async start() {
    await this.next.prepare();
    await this.router.init();
    Server.log('Initialized', 'Router');
    await this.middleware.init();
    Server.log('Initialized', 'Middleware');
    this.dev ? await this.startHttpsServer() : await this.startExpressServer();
  }

  async startHttpsServer() {
    await this.https.listen(this.port, err => this.callback(err, this.port));
    Server.log('Https server is started');
  }

  async startExpressServer() {
    await this.express.listen(this.port, err => this.callback(err, this.port));
    Server.log('Express server is started');
  }

  /* Loggers */

  callback(err, port) {
    err ? Server.error(err.message) : Server.log(`Listening on port ${port}`);
  }
  static log(message, source) {
    let signature = source ? `${source}`.cyan + ' -' : '-';
    console.log('[server]'.cyan, signature, message);
  }
  static error(message, source) {
    let signature = source ? `${source}`.red + ' -' : '-';
    console.error('[server]'.bgRed.white.bold, signature, 'Error:', `"${message}"`);
  }
}

module.exports = Server;
