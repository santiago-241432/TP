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
            level:'debug'
        })
    ]
});

export default log;