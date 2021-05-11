import React,{useContext} from 'react';
import LoginForm from '../components/LoginForm';
import {AuthContext} from '../stores/authContext';
import { useRouter } from 'next/router'


function Login(props) {

	const router = useRouter();

	const {Login} = useContext(AuthContext);

	const [ loginInfo, setLoginInfo ] = React.useState({ username: '', password: '' });

	function handleSubmit (){
		Login(loginInfo);
		
		
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
