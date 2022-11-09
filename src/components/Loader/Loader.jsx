import { LineWave } from 'react-loader-spinner';

import css from './Loader.module.css';

export const Loader = () => {
  return (
    <>
      <LineWave className={css.Loader} />
    </>
  );
};
