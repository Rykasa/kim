import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors';
import { CreateUserService } from '../services/CreateUserService';

const matchEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

class CreateUserController{
  async handle(request: Request, response: Response){
    const { name, password, email } = request.body;

    const service = new CreateUserService();

    if(!name || name.trim() === ''){
      throw new BadRequestError('Please provide name');
    }else if(!email || email.trim() === ''){
      throw new BadRequestError('Please provide email');
    }else if(!password || email.trim() === ''){
      throw new BadRequestError('Please provide password');
    }else if(!matchEmail.test(email)){
      throw new BadRequestError('Please provide valid email');
    }

    const result = await service.execute(name, password, email);

    return response.status(StatusCodes.CREATED).json(result);
  }
}

export { CreateUserController };