import "reflect-metadata";
import * as dotenv from 'dotenv';
import { createExpressServer } from "routing-controllers";
dotenv.config()

createExpressServer({
   controllers: [],
   cors: true
})