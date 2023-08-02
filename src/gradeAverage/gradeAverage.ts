export function gradeAverage(scores: number[]) {
   const total = scores.reduce((acc, score) => acc + score);

   return total / scores.length;
}
