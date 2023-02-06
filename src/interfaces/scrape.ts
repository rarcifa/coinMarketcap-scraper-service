import { ICoin } from '@lib/interfaces/coin';

export interface IScrape {
  trendingCoins: (data: string) => Promise<ICoin[]>;
  mostVisitedCoins: (data: string) => Promise<ICoin[]>;
}
