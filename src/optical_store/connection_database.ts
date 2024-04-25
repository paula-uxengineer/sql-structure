import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config()

const poolOptical = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: 3306 // same port to mysql server
});

export default poolOptical