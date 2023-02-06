import { NextFunction, Request, Response } from 'express';
import {
  AUTHORIZATION_FAILED,
  READ_API_SECRET,
  WRITE_API_SECRET,
  EXPIRED_TOKEN,
  INVALID_API_KEY,
} from '@config/constants';
import { security } from '@helpers/security';
import { HTTP_CODES } from '@lib/interfaces/status';
import { IMiddleware } from '@src/interfaces/middleware';

export const middleware: IMiddleware = {
  /**
   * @summary  checks for endpoint read rights
   * @param  {Request} req - request value
   * @param  {Response} res - response value
   * @param  {NextFunction} next - next function
   * @returns  {Promise<void | Response> } - returned value
   */
  authorizehRead: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response> => {
    try {
      const apiKey: string = req.header('x-api-key');
      const isValidApiKey: boolean = security.authenticateApiKey(
        READ_API_SECRET,
        apiKey
      );

      if (!isValidApiKey) {
        return res
          .status(HTTP_CODES.UNAUTHORIZED)
          .json({ message: INVALID_API_KEY });
      }

      if (isValidApiKey) {
        return next();
      }
    } catch (e) {
      if (e.name === 'TokenExpiredError') {
        return res
          .status(HTTP_CODES.UNAUTHORIZED)
          .json({ message: EXPIRED_TOKEN });
      }

      return res
        .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
        .json({ message: AUTHORIZATION_FAILED });
    }
  },

  /**
   * @summary  checks for endpoint write rights
   * @param  {Request} req - request value
   * @param  {Response} res - response value
   * @param  {NextFunction} next - next function
   * @returns  {Promise<void | Response> } - returned value
   */
  authorizehWrite: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response> => {
    try {
      const apiKey: string = req.header('x-api-key');
      const isValidApiKey: boolean = security.authenticateApiKey(
        WRITE_API_SECRET,
        apiKey
      );

      if (!isValidApiKey) {
        return res
          .status(HTTP_CODES.UNAUTHORIZED)
          .json({ message: INVALID_API_KEY });
      }

      if (isValidApiKey) {
        return next();
      }
    } catch (e) {
      if (e.name === 'TokenExpiredError') {
        return res
          .status(HTTP_CODES.UNAUTHORIZED)
          .json({ message: EXPIRED_TOKEN });
      }

      return res
        .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
        .json({ message: AUTHORIZATION_FAILED });
    }
  },
};
