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
  apiKey: "AIzaSyAIXCHlvwO0M2Diarorjkhy_wabk2f8jnc",
  authDomain: "capstone-db-1c387.firebaseapp.com",
  projectId: "capstone-db-1c387",
  storageBucket: "capstone-db-1c387.appspot.com",
  messagingSenderId: "72290867262",
  appId: "1:72290867262:web:88ebee7772fe65f7c3596f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//This is class we access via google api
const requestProvider = new GoogleAuthProvider();
requestProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, requestProvider);
