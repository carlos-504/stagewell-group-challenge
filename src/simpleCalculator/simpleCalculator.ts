const division = (a: number, b: number) => {
   if (b === 0) {
      return 'Impossible to divide by zero';
   }

   return a / b;
};

export function simpleCalculator(operation: string, a: number, b: number) {
   switch (operation) {
      case '+':
         return a + b;
      case '-':
         return a - b;
      case '*':
         return a * b;
      case '/':
         return division(a, b);
      default:
         return 'invalid operation';
   }
}
