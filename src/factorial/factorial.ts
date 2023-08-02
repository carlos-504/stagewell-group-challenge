import logger from "../config/logger";

export function calculateFactorial(num: number) {
   if (num < 0) {
      throw new Error('the number cannot be negative');
   }

   if (num === 0) {
      return 1;
   }

   let factorial = 1;
   logger.info('calculating...')
   for (let i = 1; i <= num; i++) {
      factorial *= i;
   }
   logger.info('completed calculation')

   return factorial;
}
