import React from "react";
import LoginForm from "../components/LoginForm";
import classes from '../styles/login.module.css';



function Login() {


  return (
    <div className={classes.root}>
      <LoginForm />
    </div>
  );
}

export default Login;
