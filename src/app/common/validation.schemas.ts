import Joi from "joi";

export namespace Validation {
  export const stringRequired = Joi.string().required();
  export const booleanRequired = Joi.boolean().required();
  export const idValidation = stringRequired;
  export const passwordValidation = stringRequired.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'));
  export const ageValidation = Joi.number().min(4).max(130).required()

  export const urlParamsUserIdValidation = Joi.object({
    params: Joi.object({
      id: idValidation,
    }).unknown(true),
  }).unknown(true);

  export const user = Joi.object().keys({
    id: stringRequired,
    password: passwordValidation,
    login: stringRequired,
    age: ageValidation,
    isDeleted: booleanRequired,
  }).unknown(true);

  export const users = Joi.array().items(user);

  export const urlBodyUserValidation = Joi.object({
    body: user,
  }).unknown(true);

  export const urlBodyUsersValidation = Joi.object({
    body: users,
  }).unknown(true);
}
