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
                error: 'No post found',
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
}
export default OfficeClass;
