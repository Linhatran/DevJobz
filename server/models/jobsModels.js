const { Pool } = require('pg');
const PG_URI =
  'postgres://hpiyipbr:wuSBZ4Z65v538S8MM6DGaG6MMc1ByhLk@suleiman.db.elephantsql.com:5432/hpiyipbr';
const pool = new Pool({ connectionString: PG_URI });
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
