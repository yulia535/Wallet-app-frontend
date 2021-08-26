import LoginForm from '../../components/LoginForm'
import styles from '../LoginView/loginView.module.css'
// import React, { Component } from 'react';

const LoginView = () => (
  <div className={styles.viewContainer}>
     {/* {window.innerWidth > 767 ? (
       <>
      <span>Finance App</span>
      <LoginForm/>
      </>
  ) : (
      <LoginForm/>
    )} */}
    <LoginForm/>
  </div>
);

// class LoginView extends Component {
// state = { width: window.innerWidth };
//   componentDidMount() {
//     window.addEventListener("resize", setWidth);
//     this.resize();
// }
// const setWidth = (event)=>{
//   this.setState({width: window.innerWidth})
// }
// resize() {
//     this.setState({width: window.innerWidth});
// }
 

//   render() {
//     const width = this.state;
    
//     return  <div className={styles.viewContainer}>
//      {width > 767 ? (
//        <>
//       <span>Finance App</span>
//       <LoginForm/>
//       </>
//   ) : (
//       <LoginForm/>
//     )}
//     {/* <LoginForm/> */}
//   </div>
// }
// }
export default LoginView;