import {createServer} from "./server";

const port = process.env.API_PORT || 3000;

createServer().listen(port);