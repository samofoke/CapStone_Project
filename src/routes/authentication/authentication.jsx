import SignUpFrom from "../../components/sign-up-form/signup";
import SignInForm from "../../components/sign-in-form/signin";
import "../../components/styles-component/auth/authentication.scss";

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpFrom />
    </div>
  );
};

export default Authentication;
