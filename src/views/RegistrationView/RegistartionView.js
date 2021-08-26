//import React, { useState, useCallback } from 'react';
//import { useDispatch } from 'react-redux';
import RegistrationForm from '../../components/RegistrationForm'
import styles from '../RegistrationView/registrationView.module.css'


const RegistrationView = () => (
  <div className={styles.viewContainer}>
    <RegistrationForm/>
  </div>
);

export default RegistrationView;