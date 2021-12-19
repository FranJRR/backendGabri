const winston = require('winston');

const logConfiguration = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize({
      level: message,
      all: true,
    }),
    winston.format.timestamp({
      format: 'DD-MMM-YYYY HH:mm:ss',
    }),
    winston.format.printf(
      (info) => `${[info.timestamp]}: ${info.level}: ${info.message}`
    )
  ),
};

const logger = winston.createLogger(logConfiguration);

logger.info('Mensaje informativo');
logger.warn('Mensaje de advertencia');
logger.error('Mensaje de error');
logger.info('Mensaje con datos', { user: 'Gabri' });
