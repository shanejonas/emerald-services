const prog = require('caporal');

prog.version('0.0.1');
require('./index');
prog.parse(process.argv);