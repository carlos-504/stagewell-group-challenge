export const validInputNumber = (num: string, parseNumber: number) => {
   if (Number.isNaN(parseNumber)) {
      throw `'${num}' is not a number`;
   }

   return true;
};

export const validWords = (word: string) => {
   const regex = /^[A-Za-z\s]+$/;

   if (!regex.test(word)) {
      throw 'this field only accepts letters';
   }
};
