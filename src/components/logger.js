export const logger = (reducer) => {
  return (prevState, action) => {
    console.group(action.type);
    console.log('PrevState: ' + prevState);
    console.log('Action: ' + action);

    const newState = reducer(prevState, action);

    console.log('New State: ' + newState);

    console.groupEnd();

    return newState;
  };
};
