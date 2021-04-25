import { Route, Redirect } from "react-router-dom";
import React from "react";
import LoadingScreen from "./LoadingScreen";
import projectOperations from "../graphql/operations/projectOperations";
import {RedirectContext} from '../UserContext';



function PrivateRoute({
    component: Component,
    path,
    location,
    ...rest
}) {

    

   const {setHome} = React.useContext(RedirectContext);

    const projectId = location.pathname.split("/")[2];
    let comp = (

            <Component />

        );

    const { data: dataProject, loading: loadingProject } = useQuery(
        projectOperations.getProjectById,
        {
            variables: {
                id: projectId,
            },
        }
    );

  
   
   if (error) return (<Redirect to='/'/>);

    let auth = data && (data.getCurrentUser._id!==null || data.getCurrentUser._id!==undefined) ;
    if(auth) setHome('/projects');

    // Authenticate user
    if (loadingProject || loading) return <LoadingScreen />;

    return (
        <Route
            path={path}
            {...rest}
            render={() =>
                auth ? (
                    comp
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
