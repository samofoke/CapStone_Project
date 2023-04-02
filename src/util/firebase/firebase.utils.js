import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
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

//This is a function we need to access the google api for auth2.0
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createDocumentFromAuth = async (
  userAuth,
  userInformation = {}
) => {
  if (!userAuth) {
    return;
  }
  const userDocReference = doc(db, "user", userAuth.uid);

  const userSnapshot = await getDoc(userDocReference);

  //we create if statement that will check if this user exists.
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createDate = new Date();

    try {
      await setDoc(userDocReference, {
        displayName,
        email,
        createDate,
        ...userInformation,
      });
    } catch (error) {
      console.log("Error while creating a User: ", error.message);
    }
  }
  return userDocReference;
};

export const authEmailandPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthEmailandPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const authStateChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);
