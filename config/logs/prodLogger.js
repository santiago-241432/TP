import winston from 'winston';
const customLevelsOption = {
    levels:{
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        http: 4,
        debug: 5
    }
}

const log = winston.createLogger({
    levels: customLevelsOption,
    transports: [
        new winston.transports.Console({
            level:'info'
        }),
        new winston.transports.File({
            level:'info',
            filename: 'logs/errors.log'
        })
    ]
});

export default log;