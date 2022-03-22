const API = require('./api');
const Pages = require('./pages');

class Router {
  constructor(express, next) {
    this.express = express;
    this.next = next;
  };

  async init() {
    this.initAPI();
    this.initPages();
    this.initErrorHandler();
    this.log("Initialized");
  };

  initAPI() {
    new API(this.express).init();
  };

  initPages() {
    new Pages(this.express, this.next).init();
  };

  initErrorHandler() {
    this.express.use((req, res, next) => {
      this.error("Handling the error: 404 Resource not found");
      const err = new Error('Not found');
      err.status = 404;
      next(error);
    });

    this.express.use((err, req, res, next) => {
      this.error(`Handling the internal server error: ${err.status}, ${err.message}`);
      res.status(err.status || 500);
      res.locals.error = err;
      res.locals.errorDescription = err.message;
      this.next.render(req, res, '/_error', {});
    });
  };

  log(message) {
    console.log( "\x1b[36m[Server.Router]\x1b[0m -", message );
  };

  error(message) {
    console.error( "\x1b[31m[Server.Router]\x1b[0m -", message );
  };
};

module.exports = Router;