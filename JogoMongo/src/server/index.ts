import "reflect-metadata";
import * as dotenv from 'dotenv';
import { createExpressServer } from "routing-controllers";
dotenv.config()

const port = process.env.PORT
const host = process.env.HOST


createExpressServer({
   controllers: [],
   cors: true
}).listen(port, host, () => {
    console.log(`Servidor iniciado em http://${host}:${port}`);
    
})