class Server {
  constructor(port, mode) {
    this.port = port;
    this.mode = mode;
  }

  async listen() {}

  static log() {
    console.log();
  }

  static error() {
    console.error();
  }
}

module.exports = Server;
