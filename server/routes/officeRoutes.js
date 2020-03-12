import express from 'express';
import OfficeClass from '../Controllers/officeController';
import checkOffice from '../middleware/checkOffice';
import checkAdmin from '../middleware/checkAdmin';
import checkToken from '../middleware/checkToken';

const router = express.Router();
const newclass = new OfficeClass();
router.post('/offices', [checkOffice, checkAdmin], newclass.createOffice);
router.get('/offices', [checkToken], newclass.getAllOffices);
router.get('/offices/:officeId', [checkToken], newclass.getSpecificOffice);
export default router;
