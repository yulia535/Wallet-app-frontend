import { authOperations } from '../../redux/auth';
import styles from './loginform.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = { email: '', password: '' };


const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string()
    .min(6, 'Must contain at least 6 characters')
    .max(12, 'Must contain max 12 characters')
    .required('Required'),
});



function LoginForm() {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
 const dispatch = useDispatch();

 const [user, setUser] = useState(initialValues);

  const onSubmit = values => {
    const { email, password } = values;

           dispatch(authOperations.login({email, password}));
           setUser({
             email: '',
             password: '',
           });
    // console.log(values);
  };


  const formik = useFormik({
    initialValues,
 
    onSubmit,
    validationSchema,
    // validate,
  });

  // console.log(user);
 

 
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <h2 className={styles.title}>Wallet</h2>
        <label htmlFor="email" className={styles.visuallyHidden}>
          Email
        </label>
        <input
          className={styles.input}
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <label htmlFor="password" className={styles.visuallyHidden}>
          Пароль
        </label>
        <input
          className={styles.input}
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <button type="submit" className={styles.button}>
          Вход
        </button>
        <button type="submit" className={styles.button}>
          Регистрация
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

// // import mail from '../../img/mail.svg';
// import 'modern-normalize/modern-normalize.css';
// import { authOperations } from '../../../redux/auth';
// import styles from './loginform.module.css';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import {Link} from 'react-router-dom'

// export default function LoginForm() {
// const dispatch = useDispatch();

//     const [user, setUser] = useState({
//       email: '',
//       password: '',
//     });
//  ;

//     const handleChange = evt => {
//       const { name, value } = evt.target;
//             setUser(prevUser => ({ ...prevUser, [name]: value }));
//     };

//      const handleSubmit = evt => {
//        evt.preventDefault();

//        const { email, password } = user;

//        dispatch(authOperations.login({email, password}));
//        setUser({
//          email: '',
//          password: '',
//        });
//      };

//   return (
//     <div className={styles.wrapper}>
//       <form action="#" className={styles.form} onSubmit={handleSubmit}>
//         <h2 className={styles.title}>Wallet</h2>

//         <label htmlFor="user_email" className={styles.visuallyHidden}>
//           Email
//         </label>
//         <input
//           className={styles.input}
//           type="email"
//           name="email"
//           value={user.email}
//           // id="email54645656"
//           placeholder="E-mail"
//           onChange={handleChange}
//           required
//         />
//         {/* <svg className="input-svg" width="24px" height="24px">
//                 <use href={mail}></use>
//               </svg> */}

//         <label htmlFor="user_password" className={styles.visuallyHidden}>
//           Пароль
//         </label>
//         <input
//           className={styles.input}
//           type="password"
//           name="password"
//           value={user.password}
//           // id="password"
//           onChange={handleChange}
//           placeholder="Пароль"
//         />
//         <button className={styles.button} type="submit">
//           Вход
//         </button>
//         <Link to="/register" className={styles.link}>
//           <button className={styles.button} type="submit">
//             Регистрация
//           </button>
//         </Link>
//       </form>
//     </div>
//   );
// }
