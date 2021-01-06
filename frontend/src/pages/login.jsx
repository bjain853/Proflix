import React from "react";
import LoginForm from "../components/LoginForm";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "15rem",
    backgroundImage:"url(https://i.pinimg.com/originals/fe/9a/fb/fe9afbe8b357c2f0068b50626fb1e840.jpg)",
    border: "3px black solid",
    margin:"0rem",
    height:"100vh",
    alignItems:"center",
  },
});

function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LoginForm />
    </div>
  );
}

export default Login;
