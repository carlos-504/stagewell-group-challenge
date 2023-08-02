export function verifyPalindrome(word: string): boolean {
   const formatWord = word.trim().toLowerCase();

   const reverseWord = formatWord.split('').reverse().join('');

   return formatWord === reverseWord;
}
