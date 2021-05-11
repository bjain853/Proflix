import { useContext, useState } from 'react';
import SignUpForm from '../components/SignUpForm';
import { AuthContext } from '../stores/authContext';

function SignUp(props) {
	const [ signUpInfo, setSignUpInfo ] = useState({
		name: '',
		email: '',
		username: '',
		password: ''
	});

	const { SignUp } = useContext(AuthContext);

	function handleSubmit() {
		//signUp(signUpInfo);
		SignUp(signUpInfo);
	}

	return <SignUpForm handleSubmit={handleSubmit} setSignUpInfo={setSignUpInfo} signUpInfo={signUpInfo} />;
}

export default SignUp;
