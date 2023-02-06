import { IWrite } from '@src/interfaces/write';
import { ICoin } from '@lib/interfaces/coin';
import fs from 'fs';
import { logger } from '@helpers/logger';

export const write: IWrite = {
  /**
   * @summary  writes trending coins to json file
   * @param  {string} data - param object
   * @returns  {void} - returned value
   */
  trendingCoins(data: ICoin[]): void {
    fs.writeFile('trendingCoins.json', JSON.stringify(data, null, 2), (e) => {
      if (e) {
        logger.error(`[helper/write/trendingCoins] - ${e.message}`);
        return;
      }
      logger.info('[helper/write/trendingCoins] - Success');
      return;
    });
  },

  /**
   * @summary  writes most visited coins to json file
   * @param  {string} data - param object
   * @returns  {void} - returned value
   */
  mostVisitedCoins(data: ICoin[]): void {
    fs.writeFile(
      'mostVisitedCoins.json',
      JSON.stringify(data, null, 2),
      (e) => {
        if (e) {
          logger.error(`[helper/write/mostVisitedCoins] - ${e.message}`);
          return;
        }
        logger.info('[helper/write/mostVisitedCoins] - Success');
        return;
      }
    );
  },
};
