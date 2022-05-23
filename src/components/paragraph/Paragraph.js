import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export const Paragragh = () => {
  const getContext = useContext(ThemeContext);

  return (
    <p className={getContext.theme}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur sit
      accusamus exercitationem laboriosam quibusdam. Dolorem amet ipsum
      asperiores aperiam deleniti eaque commodi, maxime quod vel eligendi, rerum
      quo molestiae, nobis voluptas tempore! Voluptates aut consectetur
      perspiciatis fugit! Nostrum eveniet saepe nihil magni, quibusdam,
      inventore incidunt ab eos distinctio odio minus!
    </p>
  );
};
