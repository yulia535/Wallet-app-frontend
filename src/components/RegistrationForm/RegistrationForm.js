import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import styles from '../RegistrationForm/registrationForm.module.css';

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
      <div>

        <form
         // onSubmit={handleSubmit}
          className={styles.form}
          autoComplete="off"
        >

          <label className={styles.label}>
            E-mail
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleChange}
            />
          </label>

          <label className={styles.label}>
             Пароль
            <input
              type="password"
              name="password"
              value={newUser.password}
              onChange={handleChange}
            />
              </label>
              <label className={styles.label}>
            Подтвердите пароль
            <input
            //   type="password"
            //   name="password"
            //   value={newUser.password}
            //   onChange={handleChange}
            />
              </label>
               <label className={styles.label}>
            Ваше имя
            <input
              type="text"
              name="name"
              value={newUser.name}
            onChange={handleChange}
            />
          </label>

              <button type="submit">РЕГИСТРАЦИЯ</button>
              <button type="submit">ВХОД</button>
        </form>
      </div>
    );
}