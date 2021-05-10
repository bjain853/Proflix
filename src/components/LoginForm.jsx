import { Paper, Button, TextField, Typography, Grid, Box } from '@material-ui/core';
import React from 'react';
import classes from '../styles/login.module.css';

export default function LoginForm({handleSubmit,loginInfo,setLoginInfo}) {
	
	
	
	const handleChange = (event) => {
		let updatedInfo = { ...loginInfo };
		updatedInfo[event.target.name] = event.target.value;
		setLoginInfo(updatedInfo);
	};

	return (
		<Box className={classes.root} component="div">
		<Grid className={classes.fieldContainer} container direction="column" spacing={2} justify="space-evenly" alignItems="stretch">
			<Paper elevation={1} style={{ width: '80%',padding:"1rem" }}>
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
				<Button
					variant="contained"
					type="submit"
					color="secondary"
					onClick={handleSubmit}
					style={{marginTop:"2rem"}}
				>
					<Typography>Submit</Typography>
				</Button>
			</Paper>
		</Grid>
	</Box>
	);
}
