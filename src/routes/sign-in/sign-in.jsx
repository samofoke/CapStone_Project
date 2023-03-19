import { useEffect } from "react";
import firebase from "firebase/compat/app";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../util/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createDocumentFromAuth(user);
  };

  useEffect(() => {
    const getAuth = async () => {
      await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      const res = await getRedirectResult(auth);
      if (res) {
        const userDirect = await createDocumentFromAuth(res.user);
        console.log(userDirect);
      }
    };
    getAuth();
  }, []);
  return (
    <div>
      <h1>The sign-in page</h1>
      <button onClick={logGoogleUser}>sign in with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        sign in with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
