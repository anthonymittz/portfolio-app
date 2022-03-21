const dotenv = require('dotenv').config();
const Server = require('./server/server');

async function main() {
  const port = process.env.PORT;
  const mode = process.env.NODE_ENV;

  await new Server(port, mode).start();
}

main();