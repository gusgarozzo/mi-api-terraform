import Joi from 'joi';

export const createProductSchema = Joi.object({
  title: Joi.string().trim().min(1).required().messages({
    'string.base': 'title debe ser una cadena',
    'any.required': 'title es requerido',
  }),
  price: Joi.number().precision(2).required().messages({
    'number.base': 'price debe ser un número',
    'any.required': 'price es requerido',
  }),
  description: Joi.string().allow('', null),
  category: Joi.string().trim().default('GENÉRICA'),
  image: Joi.string().uri().allow('', null),
});

export default createProductSchema;
