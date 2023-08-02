import promptSync from 'prompt-sync';
import logger from '../config/logger';
import { validInputNumber } from '../utils';
import { gradeAverage } from './gradeAverage';

const prompt = promptSync();

function execute() {
   logger.info('start proccess');
   const scores: number[] = [];

   for (let i = 1; i <= 3; i++) {
      const score = prompt(`Enter the ${i}º score: `);
      const parseScore = parseFloat(score);
      validInputNumber(score, parseScore);

      scores.push(parseScore);
   }

   const result = gradeAverage(scores);

   logger.info(`result: ${result.toFixed(2)}`);
   logger.info('end proccess');
}

execute();
