import SignUpFrom from "../../components/sign-up-form/signup";
import SignInForm from "../../components/sign-un-form/signin";

const Authentication = () => {
  return (
    <div>
      <h1>The sign-in page</h1>
      <SignInForm />
      <SignUpFrom />
    </div>
  );
};

export default Authentication;
