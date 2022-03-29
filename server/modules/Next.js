const next = require('next');

function init(dev, host, port) {
  //@ts-ignore
  return next({ dev, host, port });
}

module.exports = init;
