const prog = require('caporal');

prog.version('0.0.1');
require('./service-manager-caporal');
prog.parse(process.argv);
