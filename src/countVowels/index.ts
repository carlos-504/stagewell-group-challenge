import promptSync from 'prompt-sync';
import { validWords } from '../utils';
import { countVowels } from './countVowels';

const prompt = promptSync();

function execute() {
   const word = prompt('Type the word you want to know the number of vowels: ');

   validWords(word);

   countVowels(word);
}

execute();
