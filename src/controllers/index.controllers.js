import { pool } from "../db.js";

export const ping = async(_, res) => {
  const [result] = await pool.query('SELECT 1+1 AS Result');
  res.json(result[0]);
}
