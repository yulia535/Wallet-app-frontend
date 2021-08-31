import React from 'react';
import { NavLink } from "react-router-dom";
import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import { useDispatch } from 'react-redux';
 import authOperations from '../../redux/auth/auth-operations';
import Logo from '../Header/Logo'
import styles from '../RegistrationForm/registrationForm.module.css';
import iconMail from '../../image/baseline-email-24px 1.svg';
import iconUser from '../../image/baseline-account_box-24px 1.svg';
import iconLock from '../../image/baseline-lock-24px 1.svg';

function RegistrationForm() {
  const {values, errors, touched,  handleChange, handleBlur, isValid, handleSubmit, dirty} = useFormik({
    initialValues:{
      email:'',
      password:'',
      confirmPassword:'',
      name:'',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required'),
      password:Yup.string().min(6, 'Too Short!').max(12, 'Too Long!').required('Required'),
      confirmPassword:Yup.string().oneOf([Yup.ref('password')],'Passwords do not match').required('Required'),
      name:Yup.string().min(1, 'Too Short!').max(12, 'Too Long!').required('Required'),
    }),
    onSubmit:(values)=>{dispatch(authOperations.register({email:values.email, password:values.password, name:values.name} ))}
    
  })
    
  
  
  const dispatch = useDispatch();


  return (
<div className={styles.formSection}>
<div className={styles.formContainer}>
        <div className={styles.logoContainer} ><Logo/></div>

            <form
             className={styles.form}
           >
              <div className={styles.imputBox}>
              <img src={iconMail} alt="icon mail" className={styles.iconSvg} />
           <input
    
               className={styles.inputForm}
               placeholder="E-mail"
                 type="text"
                 name="email"
                 value={values.email}
                 onChange={handleChange}
                 onBlur={handleBlur}
               />
               {errors.email && touched.email && <div className={styles.errorMessage}>{errors.email}</div>}
                   </div>
                   
              <div className={styles.imputBox}>
              <img src={iconLock} alt="icon mail" className={styles.iconSvg} />
               <input
              id='password'
               className={styles.inputForm}
               placeholder="Пароль"
                 type="password"
                 name="password"
                 value={values.password}
                 onChange={handleChange}
                 onBlur={handleBlur}
               />
               {errors.password && touched.password && <div className={styles.errorMessage}>{errors.password}</div>}
               </div>
              

               <div className={styles.imputBox}>
               <img src={iconLock} alt="icon mail" className={styles.iconSvg} /> 
               <hr className={styles.lineBasic}/>

               <input
               className={styles.inputForm}
               placeholder="Подтвердите пароль"
               type="password"
               name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
               />
              {errors.confirmPassword && touched.confirmPassword && <div className={styles.errorMessage}>{errors.confirmPassword}</div>}

               </div>

               <div className={styles.imputBox}>
               <img src={iconUser} alt="icon mail" className={styles.iconSvg} /> 
               <input
                className={styles.inputForm}
                placeholder="Ваше имя"
                 type="text"
                 name="name"
                 value={values.name}
               onChange={handleChange}
               onBlur={handleBlur}
               />
                              {errors.name && touched.name && <div className={styles.errorMessage}>{errors.name}</div>}

               </div>
              
                 <button className={styles.button}
                 disabled={!isValid}
                 onClick={handleSubmit} 
                 type={"submit"}>РЕГИСТРАЦИЯ</button>
                 <NavLink className={styles.linkButton} to='/login'exact>Вход</NavLink>
                 </form>
      </div>
</div>
    );
}

export default RegistrationForm;





// export default function RegistrationForm() {
//   const [newUser, setNewUser] = useState({
//     name:'',
//     email: '',
//     password:''
//   });

//   const handleChange = useCallback( e => {
//             const { name, value } = e.target;
//             setNewUser(prev => ({
//                 ...prev,
//                 [name]: value
//             }));
//         }
    
//   , []);

// //   const dispatch = useDispatch();

// //      const  handleSubmit = useCallback( e => {
// //     e.preventDefault();

// //       dispatch(authOperations.register(newUser));
// //   setNewUser( { name:'',
// //     email: '',
// //     password:''})
   
// //   }, [dispatch,newUser ]);



//   return (
// <div className={styles.formSection}>
// <div className={styles.formContainer}>
//         <div className={styles.logoContainer} ><Logo/></div>
//         <form
//          // onSubmit={handleSubmit}
//           className={styles.form}
//           autoComplete="off"
//         >
//            <div className={styles.imputBox}>
//            <img src={iconMail} alt="icon mail" className={styles.iconSvg} />
//         <input
//             className={styles.inputForm}
//             placeholder="E-mail"
//               type="email"
//               name="email"
//               value={newUser.email}
//               onChange={handleChange}
//             />
//                 </div>
          
//                 <div className={styles.imputBox}>
//                 <img src={iconLock} alt="icon mail" className={styles.iconSvg} />
//             <input
//             className={styles.inputForm}
//             placeholder="Пароль"
//               type="password"
//               name="password"
//               value={newUser.password}
//               onChange={handleChange}
//             /></div>
//             <div className={styles.imputBox}>
//             <img src={iconLock} alt="icon mail" className={styles.iconSvg} /> 
//             <input
//             className={styles.inputForm}
//             placeholder="Подтвердите пароль"
//             type="password"
//             //   name="password"
//             //   value={newUser.password}
//             //   onChange={handleChange}
//             />
//             <hr className={styles.lineBasic}/>
//             </div>
//             <div className={styles.imputBox}>
//             <img src={iconUser} alt="icon mail" className={styles.iconSvg} /> 
//             <input
//              className={styles.inputForm}
//              placeholder="Ваше имя"
//               type="text"
//               name="name"
//               value={newUser.name}
//             onChange={handleChange}
//             /></div>

//               <button className={styles.button} type="submit">РЕГИСТРАЦИЯ</button>
//               <NavLink className={styles.linkButton} to='/login'exact>Вход</NavLink>
//         </form>
//       </div>
// </div>
//     );
// }