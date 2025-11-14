import { Pool } from "pg"

const pool = new Pool({
	connectionString: process.env.POSTGRES_URL
})


export const query = (text: String, params: any) => pool.query(text, params);
export default pool;

