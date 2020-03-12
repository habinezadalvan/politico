import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();
let pool = new Pool({connectionString: process.env.DATABASE_URL});
export default pool;