import { ADD_JOB, ADD_JOBS } from './constants';

export const initialState = {
  job: '',
  jobs: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB:
      return { ...state, job: action.payload };

    case ADD_JOBS:
      return { ...state, jobs: [...state.jobs, action.payload] };

    default:
      throw new Error('Invalid action');
  }
};
