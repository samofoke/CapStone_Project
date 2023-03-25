## React is a react app focusing on building a clothing store.

- This is a Full Stack web application that has a login using firebase and using modern fetures of React.
- running the application.
  ```
  npm start //I am still going to configuure this more.
  ```
- The Routes have been implemented.
- We use Firebase for the Auth section
  ~~~
  We going to npm install the required package and create a component.
  import { initializeApp } from "firebase/app";
  import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
  } from "firebase/auth";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "",
    authDomain: "cap-db",
    projectId: "cap-db-1",
    storageBucket: "cap-db-1.appspot.com",
    messagingSenderId: "7229",
    appId: "1:7229:web:88ebee777296f",
  };

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  //This is a function we need to access the google api for auth2.0
  const requestProvider = new GoogleAuthProvider();
  requestProvider.setCustomParameters({
    prompt: "select_account",
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () =>
    signInWithPopup(auth, requestProvider);
  ~~~
- We using rules on Cloud store to enable to read and write.
