import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController{
  async handle(request: Request, response: Response){
    const { name, password, email } = request.body;

    const service = new CreateUserService();

    const result = await service.execute(name, password, email);

    return response.status(201).json(result);
  }
}

export { CreateUserController };