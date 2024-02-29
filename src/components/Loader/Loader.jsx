import { Watch } from 'react-loader-spinner';
import css from './Loader.module.css';


const Loader = () => {
    return (
      <Watch
      visible={true}
      height="80"
      width="80"
      radius="48"
      color="#A3295B"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
      />
    );
  };
  
  export default Loader;