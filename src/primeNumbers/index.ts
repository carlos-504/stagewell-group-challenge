import promptSync from 'prompt-sync';
import { validInputNumber } from '../utils';
import { primeNumber } from './primeNumbers';
import { getTenPrimes } from './tenPrimeNumbers';
import logger from '../config/logger';

const prompt = promptSync();

function execute() {
   logger.info('start proccess');
   const num = prompt('Type the number you want: ');
   const parseNumber = parseFloat(num);

   validInputNumber(num, parseNumber);

   if (primeNumber(parseNumber)) {
      logger.info(`${parseNumber} is a prime number`);
   } else {
      logger.info(`${parseNumber} is not a prime number`);
   }

   getTenPrimes(10);
   logger.info('end proccess');
}

execute();
