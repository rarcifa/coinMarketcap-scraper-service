import * as cheerio from 'cheerio';
import { logger } from '@helpers/logger';
import { cmcService } from '@integrations/cmc-service';
import { AnyNode } from 'cheerio';
import { EMPTY_STRING } from '@config/constants';
import { ICoin } from '@lib/interfaces/coin';
import { write } from '@helpers/write';
import { IScrape } from '@src/interfaces/scrape';

export const scrape: IScrape = {
  /**
   * @summary  scrapes trending coins
   * @param  {string} data - param object
   * @returns  {Promise<ICoin[]>} - returned value
   */
  trendingCoins: async (data: string): Promise<ICoin[]> => {
    try {
      const response: {
        name: string;
      }[] = await cmcService.getTrendingCoins();

      const $: cheerio.CheerioAPI = cheerio.load(
        response as string | AnyNode | AnyNode[] | Buffer
      );
      const classItems: cheerio.Cheerio<cheerio.AnyNode> = $(data);
      const coins: ICoin[] = [];

      classItems.each((_idx: number, el: cheerio.Element) => {
        const coin: ICoin = { name: EMPTY_STRING };
        coin.name = $(el).children('p').text();
        coins.push(coin);
      });

      write.trendingCoins(coins);

      return coins;
    } catch (e) {
      logger.error(`[helper/scrape/trendingCoins] - ${e.message}`);
      return null;
    }
  },

  /**
   * @summary  scrapes most visited coins
   * @param  {string} data - param object
   * @returns  {Promise<ICoin[]>} - returned value
   */
  mostVisitedCoins: async (data: string): Promise<ICoin[]> => {
    try {
      const response: {
        name: string;
      }[] = await cmcService.getMostVisitedCoins();

      const $: cheerio.CheerioAPI = cheerio.load(
        response as string | AnyNode | AnyNode[] | Buffer
      );
      const classItems: cheerio.Cheerio<cheerio.AnyNode> = $(data);
      const coins: ICoin[] = [];

      classItems.each((_idx: number, el: cheerio.Element) => {
        const coin: ICoin = { name: EMPTY_STRING };
        coin.name = $(el).children('p').text();
        coins.push(coin);
      });

      write.mostVisitedCoins(coins);

      return coins;
    } catch (e) {
      logger.error(`[helper/scrape/mostVisitedCoins] - ${e.message}`);
      return null;
    }
  },
};
