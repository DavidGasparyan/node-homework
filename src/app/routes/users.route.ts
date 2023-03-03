import {Router} from "express";
import {
  urlBodyUsersValidation,
  urlBodyUserValidation,
  urlParamsUserIdValidation
} from "../middlewares/validation.middleware";
import {UsersController} from "../controllers/users.controller";
import {Container} from "typedi";

const usersController = Container.get(UsersController);
const userRouter = Router();

userRouter
  .route('/users')
  .get(urlParamsUserIdValidation, usersController.getAll.bind(usersController))
  .post(urlBodyUsersValidation, usersController.createMultiple.bind(usersController));
userRouter
  .route('/users/:id')
  .get(urlParamsUserIdValidation, usersController.get.bind(usersController))
  .put(urlBodyUserValidation, usersController.update.bind(usersController))
  .patch(urlBodyUserValidation, usersController.update.bind(usersController))
  .delete(urlParamsUserIdValidation, usersController.delete.bind(usersController))

export default userRouter;