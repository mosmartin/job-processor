import { Query, Resolver } from '@nestjs/graphql';
import { Job } from './models/job.model';
import { JobsService } from './jobs.service';

@Resolver()
export class JobsResolver {
  constructor(private readonly jobsService: JobsService) {}

  @Query(() => [Job], { name: 'jobs' })
  async getJobs() {
    return this.jobsService.getJobs();
  }
}
