import jwt from 'jsonwebtoken';

const generateToken = (id, nationalId, isAdmin) => jwt.sign({
    id, nationalId, isAdmin,
}, process.env.secret, {
    expiresIn: '2d',
});
export default generateToken;
