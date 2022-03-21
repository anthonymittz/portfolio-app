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
  };

  initAPI() {
    new API(this.express).init();
  };

  initPages() {
    new Pages(this.express, this.next).init();
  };

  initErrorHandler() {
    this.express.use((req, res, next) => {
      console.error(`[Router].ErrorHandler/next: ${err}`);
      const err = new Error('Not found');
      err.status = 404
      next(error)
    });

    this.express.use((err, req, res, next) => {
      console.error(`[Middleware].ErrorHandler/err: ${err}`);
      res.status(err.status || 500);
      res.locals.error = err;
      res.locals.errorDescription = err.message;
      this.next.render(req, res, '/_error', {});
    });
  };
};

module.exports = Router;