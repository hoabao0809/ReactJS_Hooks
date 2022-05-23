import React, { useRef } from 'react';
import Content from './Content';
import { useStore } from '../store';
import { actions } from '../store';

export default function MenuComponent() {
  const [state, dispatch] = useStore();
  const inputRef = useRef();

  const handleClick = () => {
    dispatch(actions.addJobs(state.job));
    dispatch(actions.addJob(''));
    inputRef.current.focus();
  };

  return (
    <>
      <div className="container">
        <Content inputRef={inputRef} />
        <button onClick={handleClick}>Add</button>
      </div>
      <div className="container">
        {state.jobs ??
          state.jobs.map((item, index) => {
            return (
              <>
                <li key={index}>{item}</li>
              </>
            );
          })}
      </div>
    </>
  );
}
