import { createContext, useState, useEffect } from 'react';
import AuthActions from '../lib/authentication';
import { useRouter } from 'next/router';

export const AuthContext = createContext({
	user: null,
	Login: () => {},
	SignUp: () => {},
	Logout: () => {}
});

const AuthContextProvider = ({ children }) => {
	const { login, signUp, logout } = AuthActions;
	const router = useRouter();
	const [ authenticated, setAuthentication ] = useState(false);

	useEffect(() => {
		// check before mounting if user is logged in or not
		if(authenticated) router.push('/dashboard');
		else router.push('/login');
		// return () => {
		//     cleanup
		// }
	}, []);

	const Login = async (user) => {
		login(user)
			.then(() => {
				setAuthentication(true);
				if (authenticated) router.push('/dashboard');
			})
			.catch((error) => console.error(error));
	};

	const SignUp = async (user) => {
		signUp(user)
			.then(() => {
				setAuthentication(true);
				if (authenticated) router.push('/dashboard');
			})
			.catch((error) => console.error(error));
	};
	const Logout = async () => {
		logout()
			.then((boolean) => {
				if (boolean) {
					setAuthentication(false);
					router.push('/login');
				} else return false;
			})
			.catch((error) => console.error(error));
	};

	const context = { authenticated, Login, Logout, SignUp };

	return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
