import pool from '../db/config';

export const deleteTables = () => {
    const dropTablesQuerry = `
    DROP TABLE IF EXISTS users CASCADE;
    DROP TABLE IF EXISTS party CASCADE;
    DROP TABLE IF EXISTS office CASCADE;
    DROP TABLE IF EXISTS candidate CASCADE;
    DROP TABLE IF EXISTS petition CASCADE;
    DROP TABLE IF EXISTS vote CASCADE;`;
    pool.query(dropTablesQuerry)
        .then(() => console.log('tables deleted successfully ...'))
        .catch((err) => {
            console.log(err);
            pool.end();
        });
};
export default pool;
require('make-runnable');
