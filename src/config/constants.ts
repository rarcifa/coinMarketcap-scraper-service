import * as dotenv from 'dotenv';
import express, { Router } from 'express';

dotenv.config();

// env
process.env.NODE_ENV = 'production';
process.env.NODE_ENV = 'development';

// request status
export const SUCCESS: string = 'success';
export const FAILED: string = 'failed';
export const INVALID_API_KEY: string = 'Invalid API key';
export const EXPIRED_TOKEN: string = 'Expired token';
export const AUTHORIZATION_FAILED: string = 'Failed to authorize endpoint';
export const MESSAGE_OK: string = 'OK';

// utils
export const CURRENT_DATE: Date = new Date();
export const CMC_BASE_URL: string = 'https://coinmarketcap.com';

// service config
export const IS_PROD_ENV: boolean = process.env.NODE_ENV === 'production';
export const IS_DEV_ENV: boolean = process.env.NODE_ENV === 'development';
export const DEFAULT_ENV: string = IS_DEV_ENV ? 'production' : 'development';
export const HOST: string = process.env.HOST;
export const PORT: string = process.env.PORT;
export const BASE_ACCESS_URL: string = process.env.BASE_ACCESS_URL;

// jest config
export const TEST_API_KEY: string = process.env.TEST_API_KEY;
export const TEST_SECRET_KEY: string = process.env.TEST_SECRET_KEY;

// keys
export const READ_API_KEY: string = IS_DEV_ENV
  ? TEST_API_KEY
  : process.env.READ_API_KEY;
export const READ_API_SECRET: string = IS_DEV_ENV
  ? TEST_SECRET_KEY
  : process.env.READ_API_SECRET;
export const WRITE_API_KEY: string = IS_DEV_ENV
  ? TEST_SECRET_KEY
  : process.env.WRITE_API_KEY;
export const WRITE_API_SECRET: string = IS_DEV_ENV
  ? TEST_SECRET_KEY
  : process.env.WRITE_API_SECRET;

// cheerio classes
export const CLASS_ELEMENTS_TRENDING_COINS: string =
  '.sc-aef7b723-0.sc-8497df48-1.iATetF.name-area';

// misc
export const EMPTY_STRING: string = '';

// router
export const coinRouter: Router = express.Router();
