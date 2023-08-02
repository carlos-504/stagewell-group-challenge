import logger from '../config/logger';

export function calculateInterest(initialCap: number, rate: number, months: number) {
   logger.info('calculating...');
   const result = initialCap * Math.pow(1 + rate / 100, months);
   logger.info('completed calculation');

   return result;
}
