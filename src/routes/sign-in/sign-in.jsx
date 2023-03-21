import {
  signInWithGooglePopup,
  createDocumentFromAuth,
} from "../../util/firebase/firebase.utils";
import SignUpFrom from "../../components/sign-up-form/signup";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>The sign-in page</h1>
      <button onClick={logGoogleUser}>sign in with Google</button>
      <SignUpFrom />
    </div>
  );
};

export default SignIn;
