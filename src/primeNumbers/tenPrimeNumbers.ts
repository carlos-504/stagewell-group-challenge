import logger from '../config/logger';
import { primeNumber } from './primeNumbers';

export function getTenPrimes(n: number) {
   const primes: number[] = [];
   let currentNumber = 2;

   while (primes.length < n) {
      if (primeNumber(currentNumber)) {
         primes.push(currentNumber);
      }

      currentNumber++;
   }

   logger.info(`The ten first prime numbers ${primes.join()}`);
}
