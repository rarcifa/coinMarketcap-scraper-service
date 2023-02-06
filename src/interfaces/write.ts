import { ICoin } from '@lib/interfaces/coin';

export interface IWrite {
  trendingCoins(data: ICoin[]): void;
  mostVisitedCoins(data: ICoin[]): void;
}
