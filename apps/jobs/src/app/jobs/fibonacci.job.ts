import { Job } from '../decorators/job.decorator';
import { AbstractJob } from './abstract.job';

@Job({
  name: 'Fibonacci',
  description: 'Calculates the Fibonacci number for a given input',
})
export class FibonacciJob extends AbstractJob {}
