import Joi from 'joi';
import validationHelper from '../helpers/validationHelper';

export const checkUser = (req, res, next) => {
    const createUserSchema = Joi.object().keys({
        nationalId: Joi.string().allow(''),
        email: Joi.string().allow(''),
        password: Joi.string().required(),
    });
    const schemasValidation = Joi.validate(req.body, createUserSchema);
    validationHelper(res, schemasValidation, next);
};
export default checkUser;
