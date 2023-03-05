import * as http from "http";
import app from "./app";
import sequelize from "./database/db.config";

const port = 8000;
const message = `Server running on port ${port}`;

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


const server = http.createServer(app);

server.listen(port, () => console.log(message));