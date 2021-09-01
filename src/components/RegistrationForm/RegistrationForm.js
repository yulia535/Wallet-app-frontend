import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import { useDispatch } from 'react-redux';
 import {ProgressBarLine} from 'react-progressbar-line';
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
  const [validEmail, setValidEmail] = useState(0);
  const [validPassword, setValidPassword] = useState(0)
  const [validConfirmPassword, setValidConfirmPassword] = useState(0)
  const [validName, setValidName] = useState(0)
  const [progress, setProgress] = useState(0)

  const counter = (input, set, value)=> {
    if(value.length >= 2 && input === 0){
      set(input + 25)
      const total =25+validEmail+validPassword+validConfirmPassword+validName;
      setProgress(total);
    }
    if(value.length < 2 && input !== 0){set(0)
     const total =validEmail+validPassword+validConfirmPassword+validName-25;
     setProgress(total);
  }}
  
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
                 onBlur={(e) => {handleBlur(e);console.log(isValid); counter(validEmail, setValidEmail, e.currentTarget.value);}}
                 onChange={handleChange}                
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
                 onBlur={(e) => {handleBlur(e);console.log(isValid); counter(validPassword, setValidPassword, e.currentTarget.value);}}
               />
               {errors.password && touched.password && <div className={styles.errorMessage}>{errors.password}</div>}
               </div>

               <div className={styles.imputBox}>
               <img src={iconLock} alt="icon mail" className={styles.iconSvg} /> 
               <input
               className={styles.inputForm}
               placeholder="Подтвердите пароль"
               type="password"
               name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange }
                onBlur={(e) => {handleBlur(e); counter(validConfirmPassword, setValidConfirmPassword, e.currentTarget.value);}}
               />
              {errors.confirmPassword && touched.confirmPassword && <div className={styles.errorMessage}>{errors.confirmPassword}</div>}
               <div className={styles.lineBasic}><ProgressBarLine
                        value={progress}
                        min={0}
                        max={100}
                        strokeWidth={1}
                        trailWidth={1}
                        styles={{
                          path: {
                            stroke: '#24CCA7'
                          },
                          trail: {
                            stroke: '#E5F1EF'
                          },
                          text:{
                            fontSize: '0px'
                        }
                       }}
                      /></div>
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
              onBlur={(e) => {handleBlur(e);console.log(isValid); counter(validName, setValidName, e.currentTarget.value);}}
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
