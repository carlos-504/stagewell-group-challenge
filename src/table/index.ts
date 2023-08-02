import promptSync from 'prompt-sync';
import { table } from './table';
import logger from '../config/logger';
import { validInputNumber } from '../utils';

const prompt = promptSync();

function execute() {
   logger.info('start proccess');
   const num = prompt('Enter the number you want to know the multiplication table: ');
   const parseNumber = parseFloat(num);

   validInputNumber(num, parseNumber);

   table(parseNumber);
   logger.info('end proccess');
}

execute();
