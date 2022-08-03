import { connectDB } from "../db/connect";

const insertText = `
  INSERT INTO users(name, password, email) VALUES($1, $2, $3) RETURNING *
`;

class CreateUserService{
  async execute(name: string, password: string, email: string){
    const user = await connectDB?.query(insertText, [name, password, email]);

    const data = user?.rows[0];

    return { data }
  }
}

export { CreateUserService }