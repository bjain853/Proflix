import React,{useContext} from 'react';
import LoginForm from '../components/LoginForm';
import {AuthContext} from '../stores/authContext';

function Login() {
	

	const {login} = useContext(AuthContext);

	const [ loginInfo, setLoginInfo ] = React.useState({ username: '', password: '' });

	function handleSubmit (){
		login(loginInfo);
	};

	return (
		<LoginForm
			loginInfo={loginInfo}
			setLoginInfo={setLoginInfo}
			handleSubmit={handleSubmit}
		/>
	);
}

export default Login;
