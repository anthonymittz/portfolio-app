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

    this.express.get('/api/comments/:id', (req, res, next) => {
      let filePath = path.join(__dirname, '..', 'public', 'comments', `${req.params.id}.json`);
      let doesExists = fs.existsSync(filePath);
      this.log("Trying to fetch file\n" + "\x1b[2m" + `${filePath}` + "\x1b[0m");

      if (doesExists) {
        this.log('[Server.API] File is located');
        let comment = JSON.parse(fs.readFileSync(filePath));
        this.log('[Server.API] Parsed: ', comment);
        return res.json({comment});

      } else {
        let err = new Error('File is missing');
        err.status = 404;
        this.error(err.message);
        throw err;
      };
    });

    this.express.use('/api/*', (req, res) => {
      res.status(404).json({ error: "[Server.API] Unknown URL: resource not found." })
    });
  };

  log(message) {
    console.log( "\x1b[36m[Server.API]\x1b[0m -", message );
  };

  error(message) {
    console.error( "\x1b[31m[Server.API]\x1b[0m -", message );
  };
};

module.exports = API;