import group from '../../../img/group.png';
import styles from './loginpage.module.css';
// import { Link } from 'react-router-dom';
// import mail from '../../img/mail.svg';

import LoginForm from '../LoginFormTest';
// import './LoginPage.scss';

export default function LoginPage() {


  return (
    <section className={styles.login}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <img src={group} alt="loginpage-img" className={styles.img} />
          <h1 className={styles.title}>Finance App</h1>
        </div>

        <LoginForm />
      </div>
    </section>
  );
}
