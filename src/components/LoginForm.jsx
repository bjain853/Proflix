import { Paper, Button, TextField, Typography, Grid, Container } from '@material-ui/core';
import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.up('lg')]: {
			padding: '5rem'
		},
		padding: '1rem',
		height: '100%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	fieldContainer: {
		justifyItems: 'center',
		[theme.breakpoints.up('lg')]: {
			padding: '2rem'
		},
		padding: '0.5rem'
	},
	submit: {
		marginLeft: '-1px'
	}
}));

export default function LoginForm() {
	const [ loginInfo, setLoginInfo ] = useState({ username: '', password: '' });

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
			<Container>
				<Grid container className={classes.fieldContainer} spacing={1}>
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
					<Grid item xs={12}>
						<Button
							variant="contained"
							type="submit"
							color="secondary"
							onClick={handleSubmit}
							className={classes.submit}
						>
							{' '}
							<Typography>Submit</Typography>{' '}
						</Button>
					</Grid>
				</Grid>
			</Container>
		</Paper>
	);
}
