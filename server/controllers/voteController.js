import dotenv from 'dotenv';
import { query } from '../db/index';

dotenv.config();
class VotersClass {
    async createVote(req, res) {
        let date = new Date();
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth()).padStart(2, '0');
        const yyyy = date.getFullYear();
        date = `${mm}/${dd}/${yyyy}`;
        const {
            createdOn, createdBy, office, candidate,
        } = req.body;

        // createdOn = date;
        console.log(date);
        let selectQuery = 'SELECT * FROM users where id=$1;';
        let value = [createdBy];
        let rows = await query(selectQuery, value);
        if (!rows[0]) {
            return res.status(403).json({
                status: 403,
                error: 'Forbiden',
            });
        }
        selectQuery = 'SELECT * FROM office where id=$1;';
        value = [office];
        rows = await query(selectQuery, value);
        if (!rows[0]) {
            return res.status(404).json({
                status: 404,
                error: 'office not found',
            });
        }
        selectQuery = 'SELECT * FROM candidate where id=$1;';
        value = [candidate];
        rows = await query(selectQuery, value);
        if (!rows[0]) {
            return res.status(404).json({
                status: 404,
                error: 'candidate not found',
            });
        }
        selectQuery = 'SELECT * FROM vote where createdBy=$1;';
        value = [createdBy];
        rows = await query(selectQuery, value);
        if (rows[0]) {
            return res.status(403).json({
                status: 403,
                error: 'you have already voted',
            });
        }
        const insertQuery = 'INSERT INTO vote (createdOn​,createdBy,office, candidate) VALUES ($1, $2, $3,$4) RETURNING *;';
        const result = await query(insertQuery, [date, createdBy, office, candidate]);

        const { id } = result[0];
        // const token = generateToken(createdBy, office, candidate);
        return res.status(201).json({
            status: 201,
            message: 'vote succesfully done',
            data: {
                createdOn,
                office,
                candidate,
                id,
            },
        });
    }
}
export default VotersClass;
