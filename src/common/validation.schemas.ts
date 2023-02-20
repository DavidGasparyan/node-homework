import Joi from "joi";

export namespace Validation {
  export const user = Joi.object().keys({
    id: Joi.string().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    login: Joi.string().required(),
    age: Joi.number().min(4).max(130).required(),
    isDeleted: Joi.boolean().required(),
  });

  export const users = Joi.array().items(user);
}
