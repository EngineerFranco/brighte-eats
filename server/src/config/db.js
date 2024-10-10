// src/config/db.js
import pkg from 'pg';
const { Pool } = pkg;

const db = new Pool({
  user: 'postgres',  
  host: 'localhost',
  database: 'brighte-eats', 
  password: '123', 
  port: 5432,
});

export default db;
