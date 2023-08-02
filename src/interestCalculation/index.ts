import promptSync from 'prompt-sync';
import logger from '../config/logger';
import { validInputNumber } from '../utils';
import { calculateInterest } from './interestCalculation';

const prompt = promptSync();

function execute() {
   logger.info('start proccess');

   const initialCap = prompt('Enter the starting capital amount: ');
   const parseInitialCap = parseFloat(initialCap);
   validInputNumber(initialCap, parseInitialCap);

   const rate = prompt('Enter an interest rate: ');
   const parseRate = parseFloat(rate);
   validInputNumber(rate, parseRate);

   const months = prompt('Enter the number of months: ');
   const parseMonths = parseFloat(months);
   validInputNumber(months, parseMonths);

   const result = calculateInterest(parseInitialCap, parseRate, parseMonths);
   logger.info(`result: ${result.toFixed(2)}`);
   logger.info('end proccess');
}

execute();
