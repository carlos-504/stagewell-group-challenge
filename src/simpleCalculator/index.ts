import * as promptSync from 'prompt-sync';
import logger from '../config/logger';
import { simpleCalculator } from './simpleCalculator';

const prompt = promptSync();

function execute() {
   const operations = ['+', '-', '*', '/'];
   const operator = prompt('Type the operation you want (+, -, *, /): ');
   if (!operations.includes(operator)) {
      logger.error('this operation not exists in options');
      return;
   }

   const a = parseFloat(prompt('Type the first number: '));
   if (Number.isNaN(a)) {
      logger.error(`${a} is not a number`);
      return;
   }

   const b = parseFloat(prompt('Type the second number: '));
   if (Number.isNaN(b)) {
      logger.error(`${b} is not a number`);
      return;
   }

   const result = simpleCalculator(operator, a, b);
   logger.info(`Result: ${result}`);
   return;
}

execute();
