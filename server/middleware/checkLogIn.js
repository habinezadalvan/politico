import Joi from 'joi';
import validationHelper from '../helpers/validationHelper';

export const checkUser = (req, res, next) => {
    const createUserSchema = Joi.object().keys({
        nationalId: Joi.string()
            .required(),
        password: Joi.string().required(),
    });
    const schemasValidation = Joi.validate(req.body, createUserSchema);
    validationHelper(res, schemasValidation, next);
};
export default checkUser;
