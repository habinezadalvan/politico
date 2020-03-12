import Joi from 'joi';
import validationHelper from '../helpers/validationHelper';

export const checkOffice = (req, res, next) => {
    const createUserSchema = Joi.object().keys({
        type: Joi.string().required(),
        name: Joi.string().required(),
    });
    const schemasValidation = Joi.validate(req.body, createUserSchema);
    validationHelper(res, schemasValidation, next);
};
export default checkOffice;
