import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const errorHandlerMiddleware = (error: any, request: Request, response: Response, next: NextFunction) =>{
  let customError = {
    statusCode: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: error.message || 'Something went wrong try again later'
  }

  return response.status(customError.statusCode).send({ msg: customError.msg });
}