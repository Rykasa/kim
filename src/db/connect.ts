import { Pool,  } from 'pg';

let connectDB: Pool | undefined = undefined;

if(!connectDB){
  connectDB = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    port: parseInt(process.env.PG_PORT!)
  });
}

export { connectDB };