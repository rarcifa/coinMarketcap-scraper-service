import { service } from '@src/services/coins-service';
import { Request, Response } from 'express';
import { SUCCESS } from '@config/constants';
import { HTTP_CODES } from '@lib/interfaces/status';
import { IController } from '@src/interfaces/controller';
import { ICoin } from '@src/lib/interfaces/coin';

export const controller: IController = {
  /**
   * @summary  calls generateTrendingCoins service
   * @param  {Request} _req - request object
   * @param  {Response} res - response object
   * @returns  {Promise<Response>} - returned value
   */
  generateTrendingCoins: async (
    _req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const coins: ICoin[] = await service.generateTrendingCoins();
      return res.status(HTTP_CODES.OK).json({ status: SUCCESS, data: coins });
    } catch (e) {
      return res
        .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
        .json({ error: e.message });
    }
  },

  /**
   * @summary  calls generateMostVisitedCoins service
   * @param  {Request} _req - request object
   * @param  {Response} res - response object
   * @returns  {Promise<Response>} - returned value
   */
  generateMostVisitedCoins: async (
    _req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const coins: ICoin[] = await service.generateMostVisitedCoins();
      return res.status(HTTP_CODES.OK).json({ status: SUCCESS, data: coins });
    } catch (e) {
      return res
        .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
        .json({ error: e.message });
    }
  },
};
