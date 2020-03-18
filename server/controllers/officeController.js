import dotenv from 'dotenv';
import { query } from '../db/index';

dotenv.config();
class OfficeClass {
    async createOffice(req, res) {
        const {
            type, name,
        } = req.body;
        const insertQuery = 'INSERT INTO office (type, name) VALUES ($1, $2) RETURNING *;';
        const result = await query(insertQuery, [type, name]);
        const { id } = result[0];
        return res.status(201).json({
            status: 201,
            message: 'Office created',
            data: {
                id,
                type,
                name,
            },
        });
    }

    async getAllOffices(req, res) {
        const selectQuerry = 'SELECT * FROM office;';
        const results = await query(selectQuerry);
        if (!results[0]) {
            return res.status(404).json({
                status: 404,
                error: 'No office found',
            });
        }
        return res.status(200).json({
            status: 200,
            message: 'Posts successfully retreived',
            data: {
                results,
            },
        });
    }

    async getSpecificOffice(req, res) {
        const id = parseInt(req.params.officeId, 10);
        const selectQuerry = 'SELECT * FROM office WHERE id=$1;';
        const officeFound = await query(selectQuerry, [id]);
        if (officeFound[0]) {
            return res.status(200).json({
                status: 200,
                message: 'post successfully retrieved',
                data: officeFound[0],
            });
        }
        return res.status(404).json({
            status: 404,
            error: 'office not found',
        });
    }

    async createCandidate(req, res) {
        const officeid = parseInt(req.params.officeId, 10);
        const {
            office, party, candidate,
        } = req.body;
        const selectQuerry = 'SELECT * FROM office WHERE id=$1;';
        const officeFound = await query(selectQuerry, [officeid]);
        if (!officeFound[0]) {
            return res.status(404).json({
                status: 404,
                message: 'office not found',
            });
        }
        const selectQuerry1 = 'SELECT * FROM party WHERE id=$1;';
        const officeFound1 = await query(selectQuerry1, [party]);
        if (!officeFound1[0]) {
            return res.status(404).json({
                status: 404,
                message: 'party not found',
            });
        }
        const selectQuerry2 = 'SELECT * FROM users WHERE id=$1;';
        const officeFound2 = await query(selectQuerry2, [candidate]);
        if (!officeFound2[0]) {
            return res.status(404).json({
                status: 404,
                message: 'candidate not found',
            });
        }
        const selectQuerry3 = 'SELECT * FROM candidate WHERE office=$1 and candidate=$2;';
        const officeFound3 = await query(selectQuerry3, [officeid, candidate]);
        if (officeFound3[0]) {
            return res.status(403).json({
                status: 403,
                message: 'candidate already registered for this office',
            });
        }
        const insertQuery = 'INSERT INTO candidate (office, party, candidate) VALUES ($1, $2,$3) RETURNING *;';
        const result = await query(insertQuery, [officeid, party, candidate]);
        const { id } = result[0];
        return res.status(201).json({
            status: 201,
            message: 'request submitted',
            data: {
                id,
                office,
                party,
                candidate,
            },
        });
    }

    async getResult(req, res) {
        const officeid = parseInt(req.params.officeId, 10);
        const selectQuerry3 = 'SELECT * FROM candidate WHERE office=$1;';
        const officeFound3 = await query(selectQuerry3, [officeid]);
        if (!officeFound3[0]) {
            return res.status(404).json({
                status: 404,
                message: 'office not found',
            });
        }
        const result = 'select count(office) from vote where office=$1;';
        const result1 = await query(result, [officeid]);
        const datum = 'select office,candidate from vote where office=$1;';
        const result2 = await query(datum, [officeid]);
        if (result1[0]) {
            return res.status(200).json({
                status: 200,
                message: 'results successfully retrieved',
                data: {
                    result2,
                    result1,
                },
            });
        }
    }
}
export default OfficeClass;
