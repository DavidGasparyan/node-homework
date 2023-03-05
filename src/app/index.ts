import express, {Application, Request, Response} from 'express';
import bodyParser from "body-parser";
import userRouter from "./routes/users.route";

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello world');
})

export default app;