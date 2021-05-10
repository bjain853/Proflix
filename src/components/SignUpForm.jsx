import { Paper, Button, TextField, Typography, Grid, Box } from '@material-ui/core';
import React from 'react';
import classes from '../styles/signup.module.css';

export default function SignUpForm({handleSubmit,setSignUpInfo,signUpInfo}) {
	
	
	const handleChange = (event) => {
		let updatedInfo = { ...signUpInfo };
		updatedInfo[event.target.name] = event.target.value;
		setSignUpInfo(updatedInfo);
	};

	

	/*const classes = useStyles();*/

	return (
		<Box className={classes.root} component="div">
			<Grid container direction="column" spacing={5} className={classes.fieldContainer} justify="space-evenly" alignItems="stretch">
				<Paper elevation={1} style={{ width: '80%',padding:"1rem" }}>
					<Grid item xs={12}>
						<TextField
							placeholder="John Doe"
							name="name"
							label="Name"
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							placeholder="doejohn@mail.com"
							name="email"
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
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
					<Button
						variant="contained"
						type="submit"
						color="secondary"
						onClick={handleSubmit}
						style={{marginTop:"2rem"}}
					>
						<Typography>Submit</Typography>
					</Button>
					</Grid>
				</Paper>
			</Grid>
		</Box>
	);
}
