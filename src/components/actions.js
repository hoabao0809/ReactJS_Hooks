import { ADD_JOB, ADD_JOBS } from './constants';

export const addJob = (job) => ({
  type: ADD_JOB,
  payload: job,
});

export const addJobs = (jobs) => ({
  type: ADD_JOBS,
  payload: jobs,
});
