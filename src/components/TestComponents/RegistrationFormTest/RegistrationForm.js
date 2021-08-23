
// import mail from '../../img/mail.svg';
import { authOperations } from '../../../redux/auth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './registerform.module.css'

export default function LoginForm() {
const dispatch = useDispatch();

    const [user, setUser] = useState({
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    });
 ;

    const handleChange = evt => {
      const { name, value } = evt.target;
            setUser(prevUser => ({ ...prevUser, [name]: value }));
    };

     const handleSubmit = evt => {
       evt.preventDefault();
     
       const { email, password, confirmPassword, name} = user;
      
       dispatch(authOperations.register({email, password, confirmPassword, name}));
       setUser({
         email: '',
         password: '',
         confirmPassword: '',
         name: '',
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
        <label htmlFor="confirm_password" className={styles.visuallyHidden}>
          Подтвердите Пароль
        </label>
        <input
          className={styles.input}
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          // id="password"
          // onChange={handleChange}
          placeholder="Подтвердите пароль"
        />
        <label htmlFor="name" className={styles.visuallyHidden}>
          Ваше имя
        </label>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={user.name}
          // id="password"
          onChange={handleChange}
          placeholder="Ваше имя"
        />
        <button className={styles.button} type="submit">
          Регистрация
        </button>
        <button className={styles.button} type="submit">
          Вход
        </button>
      </form>
    </div>
  );
}
