import express from 'express';
import UserClass from '../Controllers/AuthControllers';
import checkUser from '../middleware/checkUser'

const router = express.Router();
const newclass = new UserClass();
router.post('/auth/signup', [checkUser], newclass.createUser);
export default router;
