class API {
  constructor(express) {
    this.express = express;
    this.value = 0;
  };

  init() {
    this.express.get('/api/get', (req, res) => {
      res.send({ value: this.value });
    });

    this.express.post('/api/increment', (req, res) => {
      this.value++;
      res.send({ value: this.value });
    });
  };
};

module.exports = API;