import { db } from "../config/db.js";

export const annonceModel = {
    create: async (titre, description) => {
        const sql = `INSERT INTO annonces (titre, description) VALUES (?,?)`
        return db.execute(sql, [titre, description])
    },
    affiche: async () => {

        const [rows] = await db.execute(`SELECT * FROM annonces`)
        return rows
    }
}