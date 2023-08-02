import logger from '../config/logger';

export function countVowels(word: string) {
   logger.info('counting vowels');
   const volwelsWord = word.match(/[aeiou]/gi)?.length || 0;
   logger.info('completed vowel count');

   logger.info(`number of vowels: ${volwelsWord}`);
}
