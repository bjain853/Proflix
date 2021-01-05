import {
  Paper,
  Button,
  TextField,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    padding: "5rem",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  submit:{
    marginLeft:"-1px"
  }
});

export default function SignUpForm() {
  const [loginInfo, setLoginInfo] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    var updatedInfo = { ...loginInfo };
    updatedInfo[event.target.name] = event.target.value;
    setLoginInfo(updatedInfo);
  };

  const handleSubmit = () => {
    console.log(loginInfo);
  };

  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={1}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <TextField
            placeholder="John Doe"
            name="name"
            variant="outlined"
            label="Name"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="doejohn@mail.com"
            name="email"
            variant="outlined"
            label="Email"
            type="email"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="doejohn"
            name="username"
            variant="outlined"
            label="Username"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            onClick={handleSubmit}
            className={classes.submit}
          >
            <Typography>Submit</Typography>{" "}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}