const colors = require('colors');

class Server {
  constructor(port, mode) {
    this.port = port;
    this.mode = mode;
  }

  async listen() {}

  static log(message) {
    console.log('[server]'.cyan, message);
  }

  static error(message) {
    console.error(
      '[server]'.bgRed.white.bold,
      'Error with the message:',
      `"${message}"`
    );
  }
}

module.exports = Server;
