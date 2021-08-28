import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './loader.module.css';

const loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.center}>
        <Loader
          type="Puff"
          color="#4A56E2"
          height={100}
          width={100}
          timeout={1000000} //3 secs
        />
      </div>
    </div>
  );
};

export default loader;
