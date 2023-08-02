import promptSync from 'prompt-sync';
import { validWords } from '../utils';
import logger from '../config/logger';
import { countVowels } from './countVowels';

const prompt = promptSync();

function execute(): void {
   logger.info('start proccess');
   const word = prompt('Type the word you want to know the number of vowels: ');

   validWords(word);

   countVowels(word);
   logger.info('end proccess');
}

execute();
