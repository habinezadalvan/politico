import Joi from 'joi';
import validationHelper from '../helpers/validationHelper';

export const checkParty = (req, res, next) => {
    const createUserSchema = Joi.object().keys({
        name: Joi.string().required(),
        hqAddress: Joi.string().required(),
        logoUrl: Joi.string().required(),
    });
    const schemasValidation = Joi.validate(req.body, createUserSchema);
    validationHelper(res, schemasValidation, next);
};
export default checkParty;
