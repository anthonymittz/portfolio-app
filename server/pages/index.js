class Pages {
  constructor(express, next) {
    this.express = express;
    this.next = next;
  };

  init() {
    this.initSpecialPages();
    this.initDefaultPages();
  };

  initSpecialPages() {
    this.express.get('/special/:value', (req, res) => {
      console.log('[Pages] Special request!');
      const value = parseInt(req.params.value);
      if (value) {
        return this.next.render(req, res, '/special/int', req.query);
      } else {
        return this.next.render(req, res, '/special/string', req.query);
      };
    });
  };

  initDefaultPages() {
    this.express.get('/', (req, res) => {
      return this.next.render(req, res, '/', req.query);
    });

    this.express.get('*', (req, res) => {
      return this.next.render(req, res, `${req.path}`, req.query);
    });
  };
};

module.exports = Pages;