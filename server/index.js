const next = require('next');
const fs = require('fs');
const path = require('path');
const { parse } = require('url');
const { createServer } = require('https');

const options = {
  key: fs.readFileSync(path.join(__dirname, 'certificates', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'certificates', 'cert.pem')),
}

class Server {
  constructor() {
    this.host = process.env.HOST;
    this.port = process.env.EXPRESS_PORT;
    this.dev = process.env.NODE_ENV !== 'production';
    this.app = this.initApp(this.dev, this.host, this.port);
    this.express = require('./app');
    this.handle = this.initHandle(this.app);
  };

  initApp(dev, host, port) {
    return next({ dev, host, port })
  };
  
  initHandle(app) {
    return app.getRequestHandler();
  };

  async start() {
    this.app.prepare()
      .then(async () => createServer(options, async (req, res) => {
        const url = parse(req.url, true);
        await this.handle(req, res, url);
      }).listen(this.port))
  }
}

const server = new Server();

module.exports = server;