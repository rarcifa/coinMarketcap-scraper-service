import { logger } from '@src/helpers/logger';
import app from '@src/app';
import { config } from '@config/config';

app.listen(config.base.port, async (): Promise<void> => {
  logger.info(
    `${config.service.default} service up && running on ${config.base.port}!`
  );
});
