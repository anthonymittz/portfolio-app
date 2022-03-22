const fs = require('fs');
const path = require('path');

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

    this.express.get('/api/comments', (req, res) => {
      let list = fs.readdirSync(path.join(__dirname, '..', 'public', 'comments'), {withFileTypes: false});
      let removeFileExtensions = list => list.map(i => i.split('.')[0]);
      let comments = removeFileExtensions(list);
      res.json({comments});
    });

    this.express.get('/api/comments/:id', (req, res) => {
      let comment = fs.readFileSync(path.join(__dirname, '..', 'public', 'comments', `${req.params.id}.json`));
      if (comment) {
        let text = JSON.parse(comment);
        res.json({text});
      } else {
        throw new Error("Comment not found");
      }
    });

    this.express.use('/api/*', (req, res) => {
      res.status(404).json({ error: "[Server] Unknown URL: resource not found." })
    })
  };
};

module.exports = API;