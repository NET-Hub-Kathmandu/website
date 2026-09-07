import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let pool = null;

try {
  pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'nethub_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  console.log('MySQL pool initialized.');
} catch (err) {
  console.warn('MySQL configuration notice:', err.message);
}

export default pool;
