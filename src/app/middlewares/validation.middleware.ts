import {NextFunction, Request, Response} from "express";
import Joi from "joi";
import {Validation} from "../common/validation.schemas";

export const schemaValidation = (schema: Joi.Schema, req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req);

    if (!error) {
      next();
    } else {
      const errorMessages = [];

      for (let { message } of error.details) {
        errorMessages.push(message);
      }

      res.status(400).json({ message: errorMessages })
    }
};

export const urlParamsUserIdValidation = (req: Request, res: Response, next: NextFunction) => {
  schemaValidation(Validation.urlParamsUserIdValidation, req, res, next)
}

export const urlBodyUserValidation = (req: Request, res: Response, next: NextFunction) => {
  schemaValidation(Validation.urlBodyUserValidation, req, res, next)
}

export const urlBodyUsersValidation = (req: Request, res: Response, next: NextFunction) => {
  schemaValidation(Validation.urlBodyUsersValidation, req, res, next)
}