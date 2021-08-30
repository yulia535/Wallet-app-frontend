import LoginForm from '../../components/LoginForm'
import styles from '../LoginView/loginView.module.css'


const LoginView = () => (
  <div className={styles.viewContainer}>
    <h2 className={styles.nameApp}>Finance App</h2>
    <LoginForm/>
  </div>
);


export default LoginView;