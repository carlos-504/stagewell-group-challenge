import promptSync from 'prompt-sync';
import { calculateFactorial } from './factorial';
import { validInputNumber } from '../utils';
import logger from '../config/logger';

const prompt = promptSync();

function execute() {
   const num = prompt('Enter the number you want to know the factorial: ');
   const parseNumber = parseFloat(num);

   validInputNumber(num, parseNumber);

   const result = calculateFactorial(parseNumber);
   logger.info(`result: ${result}`)
}

execute();
