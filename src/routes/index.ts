import coinRoutes from '@src/routes/coin-routes';
import * as express from 'express';

/**
 * @summary  registers the routes for the service
 * @param  {express.Application} app - express application
 * @returns  {void} - returned value
 */
export const register = (app: express.Application): void => {
  app.get('/');
  app.use('(/api)?/v1/coins-service', coinRoutes);
};
