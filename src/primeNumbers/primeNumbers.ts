export function primeNumber(value: number): boolean {
   if (value <= 1) {
      return false;
   }

   for (let i = 2; i <= value / 2; i++) {
      if (value % i === 0) {
         return false;
      }
   }

   return true;
}
