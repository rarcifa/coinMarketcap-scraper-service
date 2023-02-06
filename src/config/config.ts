import * as dotenv from 'dotenv';
import {
  BASE_ACCESS_URL,
  DEFAULT_ENV,
  HOST,
  IS_DEV_ENV,
  IS_PROD_ENV,
  PORT,
} from '@config/constants';

dotenv.config();

export const config = {
  base: {
    protocol: 'http',
    host: HOST,
    port: PORT,
    accessUrl: BASE_ACCESS_URL,
  },
  service: {
    prod: IS_PROD_ENV,
    dev: IS_DEV_ENV,
    default: DEFAULT_ENV,
  },
};
