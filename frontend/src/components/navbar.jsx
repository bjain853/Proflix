import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Link from "next/link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IOSSwitch from "../components/IOSSwitch";

const useStyles = makeStyles({
  root: {
    flexGrow: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    cursor: "pointer",
    marginRight: "30rem",
    "&:hover": {
      color: "#4E8397",
    },
    fontFamily: "Helvetica",
    fontWeight: "bold",
  },
  links: {
    cursor: "pointer",
    marginRight: "5rem",
    "&:hover": {
      color: "#4E8397",
    },
  },
});

const NavBar = (props) => {
  const classes = useStyles();
  const { setDark } = props;
  const handleSwitch = (event) => {
    setDark(event.target.checked);
  };
  return (
    <AppBar color="secondary">
      <Toolbar className={classes.root}>
        <Link href="/">
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
