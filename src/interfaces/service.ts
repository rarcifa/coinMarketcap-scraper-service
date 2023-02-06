import { ICoin } from '@src/lib/interfaces/coin';

export interface IService {
  generateTrendingCoins: () => Promise<ICoin[]>;
  generateMostVisitedCoins: () => Promise<ICoin[]>;
}
