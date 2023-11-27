import { Dna } from 'react-loader-spinner';
import css from './LoaderPhone.module.css';
const Loader = () => {
  return (
    <div className={css.styleLoader}>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
