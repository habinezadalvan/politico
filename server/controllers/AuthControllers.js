import dotenv from 'dotenv';
import { query } from '../db/index';

dotenv.config();
class UsersClass {
    async createUser(req, res) {
        const {
            nationalId, firstname, lastname, othername, email, phonenumber, passportUrl, password,
        } = req.body;
        const selectQuery = 'SELECT * FROM users where nationalId=$1 ;';
        const value = [nationalId];
        const rows = await query(selectQuery, value);
        if (rows[0]) {
            return res.status(409).json({
                status: 409,
                error: `user with ${nationalId} already exists`,
            });
        }
        const isAdmin = false;
        const insertQuery = 'INSERT INTO users (nationalId, firstname, lastname, othername, email, phonenumber, passportUrl, password, isAdmin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;';
        const result = await query(insertQuery, [nationalId, firstname, lastname, othername, email, phonenumber, passportUrl, password, isAdmin]);
        const { id } = result[0];
        return res.status(201).json({
            status: 201,
            message: 'User created',
            data: {
                id,
                nationalId,
            }
        });
    }
}
export default UsersClass;
