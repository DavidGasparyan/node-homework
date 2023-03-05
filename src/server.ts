import 'reflect-metadata';
import * as http from "http";
import app from "./app";
import { AppDataSource } from './app/db/data-source';

const port = 8000;
const message = `Server running on port ${port}`;

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error))

const server = http.createServer(app);

server.listen(port, () => console.log(message));