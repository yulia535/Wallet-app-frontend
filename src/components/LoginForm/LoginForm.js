import React, { useState, useCallback } from 'react';
import { NavLink } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import authOperations from '../../redux/auth/auth-operations';

import Logo from '../Header/Logo'
import styles from '../LoginForm/loginform.module.css';
import iconMail from '../../image/baseline-email-24px 1.svg'
import iconLock from '../../image/baseline-lock-24px 1.svg'

export default function LoginForm() {
  const [user, setUser] = useState({
    email: '',
    password:''
  });

  const handleChange = useCallback( e => {
            const { name, value } = e.target;
            setUser(prev => ({
                ...prev,
                [name]: value
            }));
        }
    
  , []);


//   const dispatch = useDispatch();

//    const  handleSubmit = useCallback( e => {
//     e.preventDefault();

//  dispatch(authOperations.login(user));  
//      setUser({
//        email: '',
//     password:''
//      })
   
//   }, [dispatch, user]);
  
      return (
        <div className={styles.formSection}>
        <div className={styles.formContainer}>
                <div className={styles.logoContainer} ><Logo/></div>
                <form
                 // onSubmit={handleSubmit}
                  className={styles.form}
                  autoComplete="off"
                >
                   <div className={styles.imputBox}>
                   <img src={iconMail} alt="icon mail" className={styles.iconSvg} />
                <input
                    className={styles.inputForm}
                    placeholder="E-mail"
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                        </div>
                  
                        <div className={styles.imputBox}>
                        <img src={iconLock} alt="icon mail" className={styles.iconSvg} />
                    <input
                    className={styles.inputForm}
                    placeholder="Пароль"
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                    /></div>
                      <button className={styles.button} type="submit">Вход</button>
                      <NavLink className={styles.linkButton} to='/register'exact>РЕГИСТРАЦИЯ</NavLink>
                </form>
              </div>
        </div>
    );
}