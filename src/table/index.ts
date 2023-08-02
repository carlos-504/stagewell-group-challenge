import promptSync from 'prompt-sync';
import { table } from './table';
import { validInputNumber } from '../utils';

const prompt = promptSync();

function execute() {
   const num = prompt('Enter the number you want to know the multiplication table: ');
   const parseNumber = parseFloat(num);

   validInputNumber(num, parseNumber);

   table(parseNumber);
}

execute();
