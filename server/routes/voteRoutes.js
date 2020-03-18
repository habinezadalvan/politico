import express from 'express';
import VoteClass from '../Controllers/voteController';
// import checkAdmin from '../middleware/checkAdmin';
import checkToken from '../middleware/checkToken';
import checkVote from '../middleware/checkVote';


const router = express.Router();
const newclass = new VoteClass();
router.post('/votes', [checkVote, checkToken], newclass.createVote);

// router.get('/parties', [checkToken], newclass.getAllParties);
// router.get('/parties/:partyId', [checkToken], newclass.getSpecificParty);
// router.delete('/parties/:partyId', [checkToken, checkAdmin], newclass.deleteParty);
export default router;
