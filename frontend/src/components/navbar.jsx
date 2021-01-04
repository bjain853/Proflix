import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Link from "next/link";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    flexDirection:"row",
    justifyContent:"space-around",
  },
  links: {
    cursor: "pointer",
    marginRight:"24rem",
  },
});

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar color="primary">
      <Toolbar className={classes.root}>
        <Link href="/">
          <Typography className={classes.links} variant="h3">
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
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
