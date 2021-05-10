// import App from 'next/app'
import Layout from '../components/layout';
import '../styles/index.css';
import React from 'react';
import AuthContextProvider from '../stores/authContext';


function MyApp({ Component, pageProps }) {
    
    // React.useEffect(() => {
    //     // Remove the server-side injected CSS.
    //     const jssStyles = document.querySelector('#jss-server-side');
    //     if (jssStyles) {
    //       jssStyles.parentElement.removeChild(jssStyles);
    //     }
    //   }, []);

    return (
      <AuthContextProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </AuthContextProvider>
    )

}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp