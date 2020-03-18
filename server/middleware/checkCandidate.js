import Joi from 'joi';
import validationHelper from '../helpers/validationHelper';

export const checkCand = (req, res, next) => {
    const createVoteSchema = Joi.object().keys({
        party: Joi.number()
            .required(),
        candidate: Joi.number()
            .required(),
    });
    const schemasValidation = Joi.validate(req.body, createVoteSchema);
    validationHelper(res, schemasValidation, next);
};
export default checkCand;
