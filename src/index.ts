import express, {Application, Request, Response} from 'express';
import {CommonRoutesConfig} from './common/common.routes.config';
import {UsersRoutes} from './users/users.routes.config';
import bodyParser from "body-parser";

const app: Application = express();
const port = 8000;
const routes: Array<CommonRoutesConfig> = [];

const message = `Server running on port ${port}`;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes.push(new UsersRoutes(app));

app.get('/', (req: Request, res: Response) => {
  res.status(200).send(message);
})

// console.log(routes)

app.listen(port, () => {
  console.log(message)
})