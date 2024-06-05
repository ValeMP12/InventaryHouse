import "dotenv/config";
import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
    allowExitOnbIdle: true,
});

try {
    await pool.query('SELECT NOW()')
    console.log('Base de datos conectada');
} catch (error) {
    console.log('Error');
}