import { NextFunction, Request, Response } from 'express';

export interface IMiddleware {
  authorizehRead: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void | Response>;
  authorizehWrite: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void | Response>;
}
