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
	const { login, signUp, logout,checkSession } = AuthActions;
	const [ authenticated, setAuthentication ] = useState(false);
	let router = useRouter();
	useEffect(() => {
		// check before mounting if user is logged in or not
		checkSession().then((valid)=>{
			setAuthentication(valid);
			console.log(authenticated);
		});
		if(!authenticated) router.push('/login');
	}, [authenticated]);

	const Login = async (user) => {
		return login(user)
			.then(() => {
				setAuthentication(true);
				return true;
			})
			.catch((error) => console.error(error));
	};

	const SignUp = async (user) => {
		return signUp(user)
			.then(() => {
				setAuthentication(true);
				return true;
			})
			.catch((error) => console.error(error));
	};
	const Logout = async () => {
		return logout()
			.then((boolean) => {
				if (boolean) {
					setAuthentication(false);
					return true;
				} else return false;
			})
			.catch((error) => console.error(error));
	};

	const context = { authenticated, Login, Logout, SignUp };

	return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
