const mysql = require('mysql');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'library-management'
});

// Export the pool for reusability
module.exports = pool;