import {CommonRoutesConfig} from "../common/common.routes.config";
import {Application, Request, Response, NextFunction} from "express";
import {User} from "../types/User.type";

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: Application) {
    super(app, 'UsersRoutes');
  }

  private users: User[] = [];

  configureRoutes() {

    this.app.route('/users')
      .get((req: Request, res: Response) => {
        res.status(200).json({ users: this.users });
      })
      .post((req: Request, res: Response) => {
        const users: User[] = req.body;
        this.users = [...this.users, ...users];
        res.status(200).json({ users: users });
      });

    this.app.route(`/users/:id`)
      .all((req: Request, res: Response, next: NextFunction) => {
        // this middleware function runs before any request to /users/:userId
        // but it doesn't accomplish anything just yet---
        // it simply passes control to the next applicable function below using next()
        next();
      })
      .get((req: Request, res: Response) => {
        const { id } = req.params;
        const user = this.users.find((user: User) => user.id === id);
        res.status(200).json(user);
      })
      .put((req: Request, res: Response) => {
        const { id } = req.params;
        const updatedUser: User = req.body;

        this.users = this.users.map(user => user.id === id ? { ...user, ...updatedUser} : user);

        res.status(200).json(updatedUser);
      })
      .patch((req: Request, res: Response) => {
        const { id } = req.params;
        const updatedUser: User = req.body;

        this.users = this.users.map(user => user.id === id ? { ...user, ...updatedUser} : user);

        res.status(200).json(updatedUser);
      })
      .delete((req: Request, res: Response) => {
        const { id } = req.params;
        const user = this.users.find((user: User) => user.id === id);
        this.users = this.users.filter((user) => user.id !== id);

        res.status(200).json(user);
      });

    return this.app;
  }
}