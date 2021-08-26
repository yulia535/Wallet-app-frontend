//import React, { useState, useCallback } from 'react';
//import { useDispatch } from 'react-redux';
import Logo from '../../components/Header/Logo';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import styles from '../RegistrationView/registrationView.module.scss'


const RegistrationView = () => (
  <div className={styles.viewContainer}>
    <Logo/>
    <RegistrationForm/>
  </div>
);

export default RegistrationView;