import { ActionTypes } from '.';

const addJob = (job) => ({
  type: ActionTypes.ADD_JOB,
  payload: job,
});

const addJobs = (jobs) => ({
  type: ActionTypes.ADD_JOBS,
  payload: jobs,
});

export { addJob, addJobs };
