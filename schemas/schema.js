import Joi from "joi";

export const newSchema = Joi.object({
  hologram_name: Joi.string().required().messages({
    "string.empty": '"name" cannot be an empty field',
    "any.required": 'missing required field "name"',
  }),
  weight: Joi.number().required().messages({
    "number.empty": '"weight" cannot be an empty field',
    "any.required": 'missing required field "weight"',
  }),
  superpower: Joi.string().required().messages({
    "string.empty": '"superpower" cannot be an empty field',
    "any.required": 'missing required field "superpower"',
  }),
  extinct_since: Joi.number().required().messages({
    "number.empty": '"extinct_since" cannot be an empty field',
    "any.required": 'missing required field "extinct_since"',
  }),
});

export const changeSchema = Joi.object({
  hologram_name: Joi.string(),
  weight: Joi.number(),
  superpower: Joi.string(),
  extinct_since: Joi.number(),
});
