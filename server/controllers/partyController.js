import dotenv from 'dotenv';
import { query } from '../db/index';

dotenv.config();
class PartyClass {
    async createParty(req, res) {
        const {
            name, hqAddress, logoUrl,
        } = req.body;
        const selectQuery = 'SELECT * FROM party where name=$1 ;';
        const value = [name];
        const rows = await query(selectQuery, value);
        if (rows[0]) {
            return res.status(409).json({
                status: 409,
                error: `Party with ${name} already exists`,
            });
        }
        const insertQuery = 'INSERT INTO party (name, hqAddress, logoUrl) VALUES ($1, $2, $3) RETURNING *;';
        const result = await query(insertQuery, [name, hqAddress, logoUrl]);
        const { id } = result[0];
        return res.status(201).json({
            status: 201,
            message: 'Party created',
            data: {
                id,
                name,
            },
        });
    }

    async getAllParties(req, res) {
        const selectQuerry = 'SELECT * FROM party;';
        const results = await query(selectQuerry);
        if (!results[0]) {
            return res.status(404).json({
                status: 404,
                error: 'No party found',
            });
        }
        return res.status(200).json({
            status: 200,
            message: 'Parties successfully retreived',
            data: {
                results,
            },
        });
    }

    async getSpecificParty(req, res) {
        const id = parseInt(req.params.partyId, 10);
        const selectQuerry = 'SELECT * FROM party WHERE id=$1;';
        const partyFound = await query(selectQuerry, [id]);
        if (partyFound[0]) {
            return res.status(200).json({
                status: 200,
                message: 'entry successfully retrieved',
                data: partyFound[0],
            });
        }
        return res.status(404).json({
            status: 404,
            error: 'Party not found',
        });
    }

    async deleteParty(req, res) {
        const id = parseInt(req.params.partyId, 10);
        const selectQuerry = 'SELECT * FROM party WHERE id=$1;';
        const partyFound = await query(selectQuerry, [id]);
        if (partyFound[0]) {
            const deleteQuerry = 'DELETE FROM party WHERE id=$1;';
            await query(deleteQuerry, [id]);
            return res.status(204).json();
        }
        return res.status(404).json({
            status: 404,
            error: 'Party not found',
        });
    }
}
export default PartyClass;
