import { ActionTypes } from '.';

export const initState = {
  job: '',
  jobs: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_JOB:
      return { ...state, job: action.payload };

    case ActionTypes.ADD_JOBS:
      return { ...state, jobs: [...state.jobs, action.payload] };

    default:
      throw new Error('Invalid action');
  }
};
