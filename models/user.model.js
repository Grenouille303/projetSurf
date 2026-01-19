import {db} from '../config/db.js';

export const userModel = { 
    create: async (email, password) => {
        const sql = `INSERT INTO  users (email, password) VALUES (?,?)`;
        return db.execute(sql, [email, password])
    },

    findByEmail: async (email) => {
        const sql = `SELECT * FROM users WHERE email = ?`;
        const [rows] = await db.execute(sql, [email]);
        return rows[0];
    }
};