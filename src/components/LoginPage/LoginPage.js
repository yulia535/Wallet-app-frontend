import styles from './loginpage.module.css';
// import { Link } from 'react-router-dom';
// import mail from '../../img/mail.svg';

import LoginForm from '../LoginForm';
// import './LoginPage.scss';

export default function LoginPage() {
  return (
    <section className={styles.login}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <h1 className={styles.title}>Finance App</h1>
        </div>
        <div className={styles.formSidebar}>
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
