const config = require("config");
const winston = require("winston");
require("winston-papertrail").Papertrail;

const t = [
  new winston.transports.Console({
    prettyPrint: o => JSON.stringify(o)
  })
];

if (!!config.papertrail.enabled) {
  t.push(new winston.transports.Papertrail(config.papertrail));
}

const logger = winston.createLogger({
  transports: t
});

module.exports = logger;
