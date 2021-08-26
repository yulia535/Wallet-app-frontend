import React, { useState, useCallback } from 'react';
import { NavLink } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import authOperations from '../../redux/auth/auth-operations';
import styles from '../RegistrationForm/registrationForm.module.scss';
import iconMail from '../../image/baseline-email-24px 1.svg'
import iconUser from '../../image/baseline-account_box-24px 1.svg'
import iconLock from '../../image/baseline-lock-24px 1.svg'
export default function RegistrationForm() {
  const [newUser, setNewUser] = useState({
    name:'',
    email: '',
    password:''
  });

  const handleChange = useCallback( e => {
            const { name, value } = e.target;
            setNewUser(prev => ({
                ...prev,
                [name]: value
            }));
        }
    
  , []);

//   const dispatch = useDispatch();

//      const  handleSubmit = useCallback( e => {
//     e.preventDefault();

//       dispatch(authOperations.register(newUser));
//   setNewUser( { name:'',
//     email: '',
//     password:''})
   
//   }, [dispatch,newUser ]);



  return (
      <div className={styles.formContainer}>

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
              value={newUser.email}
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
              value={newUser.password}
              onChange={handleChange}
            /></div>
            <div className={styles.imputBox}>
            <img src={iconLock} alt="icon mail" className={styles.iconSvg} /> 
            <input
            className={styles.inputForm}
            placeholder="Подтвердите пароль"
            type="password"
            //   name="password"
            //   value={newUser.password}
            //   onChange={handleChange}
            /></div>
            <div className={styles.imputBox}>
            <img src={iconUser} alt="icon mail" className={styles.iconSvg} /> 
            <input
             className={styles.inputForm}
             placeholder="Ваше имя"
              type="text"
              name="name"
              value={newUser.name}
            onChange={handleChange}
            /></div>

              <button className={styles.button} type="submit">РЕГИСТРАЦИЯ</button>
              <NavLink className={styles.linkButton} to='/login'exact>Вход</NavLink>
        </form>
      </div>
    );
}