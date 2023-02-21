import {NextFunction, Request, Response} from "express";
import Joi from "joi";

export const validationMiddleware = (schema: Joi.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (!error) {
      next();
    } else {
      const errorMessages = [];

      for (let { message } of error.details) {
        errorMessages.push(message);
      }

      res.status(400).json({ message: errorMessages }) }
  }
};