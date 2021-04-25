import React from "react";
import SignUpForm from "../components/SignUpForm";
import classes from '../styles/signup.module.css';



function SignUp() {
 

  return (
    <div className={classes.root}>
      <SignUpForm />
    </div>
  );
}

export default SignUp;
