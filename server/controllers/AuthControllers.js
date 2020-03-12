import dotenv from 'dotenv';
import { query } from '../db/index';

dotenv.config();
class UsersClass {
    async createUser(req, res) {
        const {
            firstname, lastname, othername, email, phonenumber, passportUrl, password,
        } = req.body;
        const selectQuery = 'SELECT * FROM users where email=$1 ;';
        const value = [email];
        const rows = await query(selectQuery, value);
        if (rows[0]) {
            return res.status(409).json({
                status: 409,
                error: `user with ${email} already exists`,
            });
        }
        const isAdmin = false;
        const insertQuery = 'INSERT INTO users (firstname, lastname, othername, email, phonenumber, passportUrl, password, isAdmin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;';
        const result = await query(insertQuery, [firstname, lastname, othername, email, phonenumber, passportUrl, password, isAdmin]);
        const { id } = result[0];
        return res.status(201).json({
            status: 201,
            message: 'User created',
            data: {
                id,
                email,
            }
        });
    }
}
export default UsersClass;
