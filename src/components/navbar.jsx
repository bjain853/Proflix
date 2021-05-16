import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import Link from 'next/link';
import IOSSwitch from '../components/IOSSwitch';
import classes from '../styles/navbar.module.css';
import { AuthContext } from '../stores/authContext';
import { useRouter } from 'next/router';

const NavBar = (props) => {

	const { setDark } = props;
	const handleSwitch = (event) => {
		setDark(event.target.checked);
	};
	const { Logout,authenticated } = React.useContext(AuthContext);

  const router = useRouter();
	return (
		<AppBar color="secondary">
			<Toolbar className={classes.root}>
				<Link href="/dashboard">
					<Typography className={classes.logo} variant="h3">
						PROFLIX
					</Typography>
				</Link>
				{ (
					<Link href="/signup">
						<Typography className={classes.links} variant="h6">
							Sign Up
						</Typography>
					</Link>
				)}
				{ (
					<Link href="/login">
						<Typography className={classes.links} variant="h6">
							Login
						</Typography>
					</Link>
				)}
				{ (
					<Button
						onClick={() => {
							Logout().then((loggedOut)=>{
                if(loggedOut) router.push('/login');
              });
						}}
					>
						<Typography className={classes.links} variant="h6" style={{outline:"0"}}>
							Logout
						</Typography>
					</Button>
				)}

				<IOSSwitch onChange={handleSwitch} inputProps={{ 'aria-label': 'secondary checkbox' }} />
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
