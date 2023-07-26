import 'dotenv/config';
import express, { urlencoded } from 'express';
import config from './config/config.js';
import indexRouter from './routes/index.routes.js';

const PORT = config.server;

const CS = config.db.cs;

const app = new express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(indexRouter);


app.listen(PORT, () =>{
    console.log(`running on port ${PORT}`);
    console.log(`running on ${CS}`);
});