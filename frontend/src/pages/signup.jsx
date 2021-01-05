import React from "react";
import SignUpForm from "../components/SignUpForm";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    padding: "10rem",
    backgroundImage:
      "url(https://i.pinimg.com/originals/fe/9a/fb/fe9afbe8b357c2f0068b50626fb1e840.jpg)",
    border: "3px black solid",
    height:"100vh"
  },
});

function SignUp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SignUpForm />
    </div>
  );
}

export default SignUp;
