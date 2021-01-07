import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Link from "next/link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IOSSwitch from "../components/IOSSwitch";
import classes from '../styles/navbar.module.css';

const useStyles = makeStyles(theme=>({
  root: {
    flexGrow: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    cursor: "pointer",
    marginRight: "30rem",
    "&:hover": {
      color: theme.palette.primary.main,
    },
    fontFamily: "Helvetica",
    fontWeight: "bold",
  },
  links: {
    cursor: "pointer",
    marginRight: "5rem",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

const NavBar = (props) => {
  //const classes = useStyles();
  const { setDark } = props;
  const handleSwitch = (event) => {
    setDark(event.target.checked);
  };
  return (
    <AppBar color="secondary">
      <Toolbar className={classes.root}>
        <Link href="/dashboard">
          <Typography className={classes.logo} variant="h3">
            PROFLIX
          </Typography>
        </Link>
        <Link href="/signup">
          <Typography className={classes.links} variant="h6">
            Sign Up
          </Typography>
        </Link>
        <Link href="/login">
          <Typography className={classes.links} variant="h6">
            Login
          </Typography>
        </Link>
        <IOSSwitch
          onChange={handleSwitch}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
