import * as routes from '@routes/index';
import * as bodyParser from 'body-parser';
import express from 'express';
import { logger } from '@src/helpers/logger';

const app = express();
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

/* routing setup */
routes.register(app);

export default app;
