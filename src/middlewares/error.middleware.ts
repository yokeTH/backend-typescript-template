import { ErrorResponseDto } from '@/dtos/responses/baseResponse.dto';
import type HttpException from '@/exceptions/http.exception';
import { type NextFunction, type Response, type Request } from 'express';

export const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  try {
    const status = error.status ?? 500;
    const message = error.message ?? 'Something went wrong';

    const response = new ErrorResponseDto(status, message);
    res.status(status).json(response);
  } catch (error) {
    next(error);
  }
};
