const dotenv = require('dotenv').config();
const Server = require('./server/Server');

async function main() {
  const port = process.env.PORT || 5000;
  const mode = process.env.NODE_ENV;
  const server = new Server(port, mode);
  await server.start();
}

main();
