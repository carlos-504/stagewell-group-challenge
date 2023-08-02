import promptSync from 'prompt-sync';
import logger from '../config/logger';
import { verifyPalindrome } from './palindrome';
import { validWords } from '../utils';

const prompt = promptSync();

function execute() {
   const word = prompt('Enter the number you want to know the factorial: ');

   validWords(word);

   const result = verifyPalindrome(word);

   if (result) {
      logger.info(`the word ${word} is a palindrome`);
      return;
   }

   logger.info(`the word ${word} is not a palindrome`);
}

execute();
