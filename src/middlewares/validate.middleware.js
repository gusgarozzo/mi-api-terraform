import { AppError } from '../errors/appError.js';

export const validateBody = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, { abortEarly: false, stripUnknown: true });
  if (error) {
    const details = error.details.map((d) => d.message).join(', ');
    return next(new AppError(`Validación inválida: ${details}`, 400));
  }

  req.body = value;
  return next();
};

export default validateBody;
