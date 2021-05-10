import React from "react";
import { AppBar, Toolbar, Typography,Button } from "@material-ui/core";
import Link from "next/link";
import IOSSwitch from "../components/IOSSwitch";
import classes from '../styles/navbar.module.css';
import {AuthContext} from '../stores/authContext';


const NavBar = (props) => {
  //const classes = useStyles();
  const { setDark } = props;
  const handleSwitch = (event) => {
    setDark(event.target.checked);
  };
 const {user,logout} = React.useContext(AuthContext);

  return (
    <AppBar color="secondary">
      <Toolbar className={classes.root}>
        <Link href="/dashboard">
          <Typography className={classes.logo} variant="h3">
            PROFLIX
          </Typography>
        </Link>
       {!user && <Link href="/signup">
          <Typography className={classes.links} variant="h6">
            Sign Up
          </Typography>
        </Link>} 
        {!user &&  <Link href="/login">
          <Typography className={classes.links} variant="h6">
            Login
          </Typography>
        </Link>}
        {
          user &&  <Button onClick={logout}>
          <Typography className={classes.links} variant="h6">
            Logout
          </Typography>
        </Button>
        }
       
        <IOSSwitch
          onChange={handleSwitch}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
