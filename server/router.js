class Router {
  constructor(express, next) {
    this.express = express;
    this.next = next;
  }

  async init() {
    this.express.get('/', (req, res) => this.next.render(req, res, '/', req.query));
    this.express.get('*', (req, res) => this.next.render(req, res, '/_error', {}));
  }
}

module.exports = Router;
