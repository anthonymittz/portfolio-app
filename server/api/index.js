class API {
  constructor(express) {
    this.express = express;
    // this.value = 0;
  };

  init() {
    this.express.get('/api', (req, res) => {
      res.json({ message: "[Server] Welcome to API!" });
    });

    this.express.get('/api/get', (req, res) => {
      // res.json({ value: this.value });
    });

    this.express.get('/api/increment', (req, res) => {
      this.value++;
      // res.json({ value: this.value });
    });

    this.express.use('/api/*', (req, res) => {
      res.status(404).json({ error: "[Server] Unknown URL: resource not found." })
    })
  };
};

module.exports = API;