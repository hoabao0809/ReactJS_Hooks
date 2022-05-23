const logger = (reducer) => {
  return (prevState, action) => {
    console.group(action.type);
    console.log('Pre State: ' + JSON.stringify(prevState));
    console.log('Action: ' + action);

    const newState = reducer(prevState, action);
    console.log('New State: ' + JSON.stringify(newState));
    console.groupEnd();
    return newState;
  };
};

export { logger };
