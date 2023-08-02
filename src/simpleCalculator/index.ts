import * as promptSync from 'prompt-sync';
import logger from '../config/logger';
import { simpleCalculator } from './simpleCalculator';
import { validInputNumber } from '../utils';

const prompt = promptSync();

function execute() {
   const operations = ['+', '-', '*', '/'];
   const operator = prompt('Type the operation you want (+, -, *, /): ');
   if (!operations.includes(operator)) {
      logger.error('this operation not exists in options');
      return;
   }

   const a = prompt('Type the first number: ');
   const parseFirstNumber = parseFloat(a);
   validInputNumber(a, parseFirstNumber);

   const b = prompt('Type the second number: ');
   const parseSecondNumber = parseFloat(b);
   validInputNumber(b, parseSecondNumber);

   const result = simpleCalculator(operator, parseFirstNumber, parseSecondNumber);
   logger.info(`Result: ${result}`);
   return;
}

execute();
