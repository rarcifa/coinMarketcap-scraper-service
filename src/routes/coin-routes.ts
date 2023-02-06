import { middleware } from '@lib/middlewares/auth.middleware';
import { coinRouter } from '@src/config/constants';
import { controller } from '@handlers/coins/controller';
import { verifyErrors } from '@src/lib/middlewares/validation.middleware';
import { validator } from '@src/handlers/coins/validator';

coinRouter.get(
  '/trending-coins',
  middleware.authorizehRead,
  validator.coins,
  verifyErrors,
  controller.generateTrendingCoins
);

coinRouter.get(
  '/most-visited-coins',
  middleware.authorizehRead,
  validator.coins,
  verifyErrors,
  controller.generateMostVisitedCoins
);

export default coinRouter;
