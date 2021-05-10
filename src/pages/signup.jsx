import {useContext,useState} from 'react';
import SignUpForm from '../components/SignUpForm';
import {AuthContext} from '../stores/authContext';

function SignUp() {
	const [ signUpInfo, setSignUpInfo ] = useState({
		name: '',
		email: '',
		username: '',
		password: ''
	});

	const {signUp} = useContext(AuthContext);
	
	function handleSubmit(){
		//signUp(signUpInfo);
		signUp(signUpInfo);
	};

	return (
		<SignUpForm
			handleSubmit={handleSubmit}
			setSignUpInfo={setSignUpInfo}
			signUpInfo={signUpInfo}
		/>
	);
}

export default SignUp;
