import { body, query, ValidationChain } from 'express-validator';

export const coinsBody: ValidationChain[] = [
  body('name', 'name should be a string')
    .optional({ checkFalsy: true })
    .isString(),
];

export const validator: {
  coins: ValidationChain[];
} = {
  coins: [
    query('query', 'query should be a string')
      .optional({ checkFalsy: true })
      .isString(),
  ],
};
