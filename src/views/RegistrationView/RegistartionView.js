//import React, { useState, useCallback } from 'react';
//import { useDispatch } from 'react-redux';
import RegistrationForm from '../../components/RegistrationForm'
import styles from '../RegistrationView/registrationView.module.css'


const RegistrationView = () => (
  <div className={styles.viewContainer}>
    <h2 className={styles.nameApp}>Finance App</h2>
    <RegistrationForm/>
  </div>
);

export default RegistrationView;