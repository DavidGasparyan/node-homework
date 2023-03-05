import {Request, Response} from 'express';
import {UsersService} from "../services/users.service";
import {Service} from "typedi";
import {User} from '../entity/User';

@Service()
export class UsersController {

  constructor(
    public readonly usersService: UsersService,
  ) {
  }

  public async get(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await this.usersService.get(+id);
      res.status(200).json(user);
    } catch (err) {

    }
  }

  public async getAll(req: Request, res: Response) {
    try {
      const users = await this.usersService.getAll();
      res.status(200).json({ users });
    } catch (err) {

    }
  }

  public async createMultiple(req: Request, res: Response) {
    try {
      const users: User[] = req.body;
      const user = await this.usersService.createMultiple(users);

      res.status(200).json(user);
    } catch(err) {

    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedUser: User = req.body;
      const updateResult = await this.usersService.update(+id, updatedUser);

      res.status(200).json(updateResult);
    } catch(err) {

    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleteResult = await this.usersService.delete(+id);

      res.status(200).json(deleteResult);
    } catch(err) {

    }
  }
}