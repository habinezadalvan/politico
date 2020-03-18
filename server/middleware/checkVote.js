import Joi from 'joi';
import validationHelper from '../helpers/validationHelper';

export const checkVote = (req, res, next) => {
    const createVoteSchema = Joi.object().keys({
        createdBy: Joi.number()
            .required(),
        office: Joi.number()
            .required(),
        candidate: Joi.number()
            .required(),
    });
    const schemasValidation = Joi.validate(req.body, createVoteSchema);
    validationHelper(res, schemasValidation, next);
};
export default checkVote;
