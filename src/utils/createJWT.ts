import { sign } from 'jsonwebtoken';

export function createJWT(id: string, name: string, password: string, email: string){
  return sign(
    {
      userId: id,
      name,
      password,
      email
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
}