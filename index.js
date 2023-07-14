import 'dotenv/config';
import express, { urlencoded } from 'express';
import config from './config/config.js';
import sessionsRouter from './routes/sessions.routes.js';
import route from './routes/views.routes.js'

const app = express();
const PORT = config.server.port;
const CS = config.db.cs;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/", route);
app.use("/api/sessions", sessionsRouter);

app.listen(PORT, () =>{
    console.log(`running on port ${PORT}`);
    console.log(`running on ${CS}`);
});