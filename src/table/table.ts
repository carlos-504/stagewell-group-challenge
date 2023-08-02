import logger from '../config/logger';

export function table(num: number): void {
   logger.info(`Generating the number ${num} table`);
   for (let i = 1; i <= 10; i++) {
      logger.info(`${num} x ${i} = ${num * i}`);
   }
   logger.info(`Table of ${num} completed`);
}
