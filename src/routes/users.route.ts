import {Router} from "express";
import {Validation} from "../common/validation.schemas";
import {validationMiddleware} from "../middlewares/validation.middleware";
import {UsersController} from "../controllers/users.controller";
import {Container} from "typedi";

const usersController = Container.get(UsersController);
const userRouter = Router();

userRouter.route('/users')
  // .all(validationMiddleware(Validation.users))
  .get(usersController.getAll.bind(usersController))
  .post(usersController.createMultiple.bind(usersController));
userRouter.route('/users/:id')
  // .all(validationMiddleware(Validation.user))
  .get(usersController.get.bind(usersController))
  .put(usersController.update.bind(usersController))
  .patch(usersController.update.bind(usersController))
  .delete(usersController.delete.bind(usersController))

export default userRouter;