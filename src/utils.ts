export const validInputNumber = (num: string, parseNumber: number) => {
   if (Number.isNaN(parseNumber)) {
      throw `'${num}' is not a number`;
   }

   return true;
};
