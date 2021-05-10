import { createContext ,useState,useEffect} from 'react';
import AuthActions from '../lib/authentication';

export const AuthContext = createContext({
    user:null,
    login:()=>{},
    signUp:()=>{},
    logout:()=>{}
});

const AuthContextProvider = ({ children }) => {

    const [user,setUser] = useState(null);

    useEffect(() => { // check before mounting if user is logged in or not
        
        AuthActions.getUser().then(user => setUser(user)).catch(error=>console.log(error));

        // return () => {
        //     cleanup
        // }
    },[])

    const login = (user)=>{
        AuthActions.login(user).then(user => setUser(user)).catch(error=>console.error(error));
    };

    const signUp = (user)=>{
        AuthActions.signUp(user).then(user => setUser(user)).catch(error=>console.error(error));
    };
    const logout = ()=>{
        AuthActions.logout().then(boolean => {
            if(boolean)         
            setUser(null)
            else console.log("cannot logout user");
        }).catch(error=>console.error(error));
    };

    const context  = {user,login,logout,signUp};
	
    return (<AuthContext.Provider value={context}>
        {children}
        </AuthContext.Provider>);
};

export default AuthContextProvider;