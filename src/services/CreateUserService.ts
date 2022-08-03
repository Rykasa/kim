import { connectDB } from "../db/connect";
import { QueryResult } from 'pg';
import { createJWT } from "../utils/createJWT";

interface IUser{
  id: string;
  name: string;
  email: string;
  password: string;
}

class CreateUserService{
  async execute(name: string, password: string, email: string){
    const insertText = `
      INSERT INTO users(name, password, email) VALUES($1, $2, $3) RETURNING *
    `;
    
    if(connectDB){
      const user: QueryResult<IUser> = await connectDB.query(insertText, [name, password, email]);
  
      const data = user.rows[0];
  
      const token = createJWT(data.id, data.name, data.password, data.email);

      return { token, data }
    }

    return;
  }
}

export { CreateUserService }