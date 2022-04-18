// ./initAuth.js
import { init } from 'next-firebase-auth'

const initAuth = () => {
  init({
    authPageURL: '/auth/login',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    onLoginRequestError: (err) => {
      console.error(err)
    },
    onLogoutRequestError: (err) => {
      console.error(err)
    },
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'appinvitaciondigital',
        clientEmail: 'firebase-adminsdk-v57n0@appinvitaciondigital.iam.gserviceaccount.com',
        // The private key must not be accessible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
    },
    // Use application default credentials (takes precedence over fireaseAdminInitConfig if set)
    // useFirebaseAdminDefaultCredential: true,
    firebaseClientInitConfig: {
      apiKey: "AIzaSyC_7PJBr95OSyXMpiF846d1BwLvZTxvrbA",
      authDomain: "appinvitaciondigital.firebaseapp.com",
      projectId: "appinvitaciondigital",
      storageBucket: "appinvitaciondigital.appspot.com",
      messagingSenderId: "466777824847",
      appId: "1:466777824847:web:4a38bcb434b199c1f6d43a",
      measurementId: "G-7RYZ3BV0T1"
    },
    cookies: {
      name: 'ExampleApp', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err)
    },
    onTokenRefreshError: (err) => {
      console.error(err)
    },
  })
}

export default initAuth