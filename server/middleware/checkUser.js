import Joi from 'joi';
import validationHelper from '../helpers/validationHelper';

export const checkUser = (req, res, next) => {
    const createUserSchema = Joi.object().keys({
        nationalId: Joi.string()
            .min(16)
            .max(16)
            .required(),
        firstname: Joi.string()
            .trim()
            .min(3)
            .max(30)
            .required(),
        lastname: Joi.string()
            .trim()
            .min(3)
            .max(30)
            .required(),
        othername: Joi.string().allow(''),
        email: Joi.string().email({ minDomainSegments: 2 }).allow(''),
        phonenumber: Joi.string().max(13).regex(/^\+2507[2-3]\d{7}?/).required(),
        passportUrl: Joi.string().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9!@#$%^&*]{3,30}$/).min(8).required(),
    });
    const schemasValidation = Joi.validate(req.body, createUserSchema);
    validationHelper(res, schemasValidation, next);
};
export default checkUser;
