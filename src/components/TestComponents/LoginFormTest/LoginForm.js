// import mail from '../../img/mail.svg';
import 'modern-normalize/modern-normalize.css';
import { authOperations } from '../../../redux/auth';
import styles from './loginform.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'

export default function LoginForm() {
const dispatch = useDispatch();

    const [user, setUser] = useState({
      email: '',
      password: '',
    });
 ;

    const handleChange = evt => {
      const { name, value } = evt.target;
            setUser(prevUser => ({ ...prevUser, [name]: value }));
    };

     const handleSubmit = evt => {
       evt.preventDefault();
     
       const { email, password } = user;
      
       dispatch(authOperations.login({email, password}));
       setUser({
         email: '',
         password: '',
       });
     };

  return (
    <div className={styles.wrapper}>
      <form action="#" className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Wallet</h2>

        <label htmlFor="user_email" className={styles.visuallyHidden}>
          Email
        </label>
        <input
          className={styles.input}
          type="email"
          name="email"
          value={user.email}
          // id="email54645656"
          placeholder="E-mail"
          onChange={handleChange}
          required
        />
        {/* <svg className="input-svg" width="24px" height="24px">
                <use href={mail}></use>
              </svg> */}

        <label htmlFor="user_password" className={styles.visuallyHidden}>
          Пароль
        </label>
        <input
          className={styles.input}
          type="password"
          name="password"
          value={user.password}
          // id="password"
          onChange={handleChange}
          placeholder="Пароль"
        />
        <button className={styles.button} type="submit">
          Вход
        </button>
        <Link to="/register" className={styles.link}>
          <button className={styles.button} type="submit">
            Регистрация
          </button>
        </Link>
      </form>
    </div>
  );
}
