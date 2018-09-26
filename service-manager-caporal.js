const prog = require('caporal');
const ServiceManager = require('./service-manager');

const serviceManager = new ServiceManager();

prog
  .command('services start')
  .argument('<name>', 'service name')
  .argument('<command>', 'service command')
  .option('--max', 'Max number of times service should try to keep-alive')
  .option('--silent', 'mute stdin/out')
  .action((args, opts, logger) => {
    serviceManager.start(args.command, {
      id: args.name,
      ...opts
    });
  })
  .command('services stop')
  .argument('<name>', 'service name')
  .action((args, opts, logger) => {
    serviceManager.stop(args.name);
  })
  .command('services list')
  .action((args, opts, logger) => {
    console.log('services list', opts);
    serviceManager.list();
  })