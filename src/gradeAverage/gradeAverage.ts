import logger from '../config/logger';

export function gradeAverage(scores: number[]) {
   logger.info('adding the notes');
   const total = scores.reduce((acc, score) => acc + score);
   logger.info('completed sum')

   return total / scores.length;
}
