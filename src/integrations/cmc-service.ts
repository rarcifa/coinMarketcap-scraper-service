import { logger } from '@src/helpers/logger';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { CMC_BASE_URL } from '@config/constants';
import { ICoin } from '@src/lib/interfaces/coin';
import { ICMCService } from '@src/interfaces/cmcService';

export const cmcInstancen: AxiosInstance = axios.create({
  baseURL: CMC_BASE_URL,
});

export const cmcService: ICMCService = {
  /**
   * @summary  calls CMC api to gee trending coins
   * @returns  {Promise<ICoin[]>} - returned value
   */
  getTrendingCoins: async (): Promise<ICoin[]> => {
    const url = '/trending-cryptocurrencies/';
    try {
      const response: AxiosResponse<ICoin[], string> = await cmcInstancen.get<
        ICoin[]
      >(url);
      return response.data;
    } catch (e) {
      logger.error(`[cmc/getTrendingCoins] - ${e.message}`);
      return null;
    }
  },

  /**
   * @summary  calls CMC api to gee trending coins
   * @returns  {Promise<ICoin[]>} - returned value
   */
  getMostVisitedCoins: async (): Promise<ICoin[]> => {
    const url = '/most-viewed-pages/';
    try {
      const response: AxiosResponse<ICoin[], string> = await cmcInstancen.get<
        ICoin[]
      >(url);
      return response.data;
    } catch (e) {
      logger.error(`[cmc/getMostVisitedCoins] - ${e.message}`);
      return null;
    }
  },
};
