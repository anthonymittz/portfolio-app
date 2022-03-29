const { createServer } = require('https');
const path = require('path');
const fs = require('fs');

function createHttpsServer(express, dev) {
  const options = dev
    ? {
        key: fs.readFileSync(path.join(__dirname, '..', 'certificates', 'key.pem'), 'utf8'),
        cert: fs.readFileSync(path.join(__dirname, '..', 'certificates', 'cert.pem'), 'utf8'),
      }
    : {};

  return createServer(options, express);
}

module.exports = createHttpsServer;
