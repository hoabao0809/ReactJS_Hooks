import { useStore, actions } from '../store';

const Content = ({ inputRef }) => {
  const [state, dispatch] = useStore();
  return (
    <input
      ref={inputRef}
      value={state.job ?? ''}
      onChange={(e) => dispatch(actions.addJob(e.target.value))}
      type="text"
    />
  );
};

export default Content;
