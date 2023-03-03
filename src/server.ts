import * as http from "http";
import app from "./app";

const port = 8000;
const message = `Server running on port ${port}`;

const server = http.createServer(app);

server.listen(port, () => console.log(message));