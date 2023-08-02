export function calculateFactorial(num: number) {
   if (num < 0) {
      throw new Error('the number cannot be negative');
   }

   if (num === 0) {
      return 1;
   }

   let factorial = 1;
   for (let i = 1; i <= num; i++) {
      factorial *= i;
   }

   return factorial;
}
