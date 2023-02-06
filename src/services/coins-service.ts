import { CLASS_ELEMENTS_TRENDING_COINS } from '@src/config/constants';
import { logger } from '@src/helpers/logger';
import { scrape } from '@src/helpers/scrape';
import { IService } from '@src/interfaces/service';
import { ICoin } from '@src/lib/interfaces/coin';

export const service: IService = {
  /**
   * @summary  generates trending coins
   * @returns  {Promise<ICoin[]>} - returned value
   */
  generateTrendingCoins: async (): Promise<ICoin[]> => {
    try {
      const coins: ICoin[] = await scrape.trendingCoins(
        CLASS_ELEMENTS_TRENDING_COINS
      );
      return coins;
    } catch (e) {
      logger.error(`[services/getTrendingCoins] - ${e.message}`);
      return null;
    }
  },

  /**
   * @summary  generates most visited coins
   * @returns  {Promise<ICoin[]>} - returned value
   */
  generateMostVisitedCoins: async (): Promise<ICoin[]> => {
    try {
      const coins: ICoin[] = await scrape.mostVisitedCoins(
        CLASS_ELEMENTS_TRENDING_COINS
      );
      return coins;
    } catch (e) {
      logger.error(`[services/generateMostVisitedCoins] - ${e.message}`);
      return null;
    }
  },
};
