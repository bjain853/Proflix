import { useContext, useState } from 'react';
import SignUpForm from '../components/SignUpForm';
import { AuthContext } from '../stores/authContext';
import { useRouter } from 'next/router';

function SignUp(props) {
	const [ signUpInfo, setSignUpInfo ] = useState({
		name: '',
		email: '',
		username: '',
		password: ''
	});

	const { SignUp } = useContext(AuthContext);
	const router = useRouter();
	function handleSubmit() {
		//signUp(signUpInfo);
		SignUp(signUpInfo).then((signedUp) => {
			if (signedUp) router.push('/dashboard');
		});
	}

	return <SignUpForm handleSubmit={handleSubmit} setSignUpInfo={setSignUpInfo} signUpInfo={signUpInfo} />;
}

export default SignUp;
