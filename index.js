import 'dotenv/config';
import express, { urlencoded } from 'express';
import config from './config/config.js';
import indexRouter from './routes/index.routes.js';
import log from './config/logs/devLogger.js';

const PORT = config.server;

const CS = config.db.cs;

const app = new express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(indexRouter);


/*
app.use('/loggerTest', (req, res) => {
    try {
        const num1 = parseInt(req.body.num1);
        const num2 = parseInt(req.body.num2);

        const result = num1 + num2;

        if( result > 100) {
            throw new Error("El resultado debe ser menor a 100");
        } else {
            res.status(200).send(result);
            log.warn('warn');
            log.info('info');
        }
    } catch (e) {
        res.status(500).send("Error");
        log.error('Error')
    }
});
*/


app.listen(PORT, () =>{
    console.log(`running on port ${PORT}`);
    console.log(`running on ${CS}`);
});