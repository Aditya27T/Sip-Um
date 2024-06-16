const { json } = require('sequelize');
const winston = require('winston');

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple(),
            ),
            handleExceptions: true,
            json: false
        })
    ],
    exitOnError: false
});

const log = (context, message) => {
    const obj = {
        context,
        message: message || ''
    };
    logger.info(JSON.stringify(obj));
}

const error = (context, message, error) => {
    const obj = {
        context,
        message: message || '',
        error: error || ''
    };
    logger.error(JSON.stringify(obj));
}

module.exports = {
    log,
    error
}