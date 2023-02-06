import { Request, Response } from 'express';

export interface IController {
  generateTrendingCoins: (_req: Request, res: Response) => Promise<Response>;
  generateMostVisitedCoins: (_req: Request, res: Response) => Promise<Response>;
}
