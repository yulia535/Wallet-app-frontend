import React from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Logo from '../Header/Logo'
import styles from '../LoginForm/loginForm.module.css';
import iconMail from '../../image/baseline-email-24px 1.svg'
import iconLock from '../../image/baseline-lock-24px 1.svg'


export default function LoginForm() {
  const {values, errors, touched,  handleChange, handleBlur, isValid, handleSubmit, dirty} = useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required'),
      password:Yup.string().min(6, 'Too Short!').max(12, 'Too Long!').required('Required'),
     
    }),
    onSubmit:(values)=>{dispatch(authOperations.login({email:values.email, password:values.password, name:values.name} ))}
  })


 

   const dispatch = useDispatch();
  
      return (
        <div className={styles.formSection}>
        <div className={styles.formContainer}>
                <div className={styles.logoContainer} ><Logo/></div>
                
                <form
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
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                      {errors.email && touched.email && <div className={styles.errorMessage}>{errors.email}</div>}
                        </div>
                  
                        <div className={styles.imputBox}>
                        <img src={iconLock} alt="icon mail" className={styles.iconSvg} />
                    <input
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
                      <button className={styles.button} disabled={!isValid }
                 onClick={handleSubmit}  type="submit">Вход</button>
                      <NavLink className={styles.linkButton} to='/register'exact>РЕГИСТРАЦИЯ</NavLink>
                </form>
              
              </div>
              </div>
)}


// export default function LoginForm() {
 

//   const dispatch = useDispatch();
 
//      return (
//        <div className={styles.formSection}>
//        <div className={styles.formContainer}>
//                <div className={styles.logoContainer} ><Logo/></div>
//                <Formik 
//        initialValues={{
//          email:'',
//          password:'',
//        }}
//        validationsSchema={validSchema}
//        validateOnChange={true}
//        validateOnBlur={true}
//       onSubmit={(values)=>{dispatch(authOperations.login({email:values.email, password:values.password, name:values.name} ))}}
//        >
//          {({values, errors, touched, isValidating,  handleChange, handleBlur, isValid, handleSubmit, dirty})=>(
//                <Form
//                  className={styles.form}
//                  autoComplete="off"
//                >
//                   <div className={styles.imputBox}>
//                   <img src={iconMail} alt="icon mail" className={styles.iconSvg} />
//                <Field
//                    className={styles.inputForm}
//                    placeholder="E-mail"
//                      type="email"
//                      name="email"
//                      value={values.email}
//                      onChange={handleChange}
//                      onBlur={handleBlur}
//                    />
//                        </div>
                 
//                        <div className={styles.imputBox}>
//                        <img src={iconLock} alt="icon mail" className={styles.iconSvg} />
//                    <Field
//                    className={styles.inputForm}
//                    placeholder="Пароль"
//                      type="password"
//                      name="password"
//                      value={values.password}
//                      onChange={handleChange}
//                      onBlur={handleBlur}
//                    /></div>
//                      <button className={styles.button} disabled={!isValid && !dirty}
//                 onClick={handleSubmit}  type="submit">Вход</button>
//                      <NavLink className={styles.linkButton} to='/register'exact>РЕГИСТРАЦИЯ</NavLink>
//                </Form>)}
//                </Formik>
//              </div>
//              </div>
// )}

