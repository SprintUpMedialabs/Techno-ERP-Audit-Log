import { NextFunction, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import createHttpError from 'http-errors';
import { AuthenticatedRequest, UserPayloadSchema } from '../validators/authenticatedRequest';
import { verifyToken } from '../utils/jwtHelper';

export const authenticate = expressAsyncHandler(
  async (req: AuthenticatedRequest, _: Response, next: NextFunction) => {
    const token = req.cookies?.token;

    if (!token) {
      throw createHttpError(401, 'Unauthorized. Please log in again');
    }

    const decoded = verifyToken(token);
    const parsedUser = UserPayloadSchema.parse(decoded);
    req.data = parsedUser;

    next();
  }
);