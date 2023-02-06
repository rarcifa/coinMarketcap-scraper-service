import { ICoin } from '@lib/interfaces/coin';

export interface ICMCService {
  getTrendingCoins: () => Promise<ICoin[]>;
  getMostVisitedCoins: () => Promise<ICoin[]>;
}
