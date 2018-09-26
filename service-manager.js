const forever = require('forever');

class Services {
  start(command, options) {
    const child = forever.start([command], options);
    forever.startServer(child);
    return child;
  }
  stop(name) {
    forever.list(false, (err, processes) => {
      processes.find((proc, i) => {
        if (proc.id === name) {
          forever.stop(i, true);
          return true;
        }
      });
    })
  }
  list() {
    return forever.list(true, (err, result) => {
      console.log(result);
    });
  }
}

module.exports = Services;
