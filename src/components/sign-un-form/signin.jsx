import { useState } from "react";
import FormInput from "../form-input/form-component";
import "../styles-component/sign-in-container/sign-in.scss";
import ButtonComponent from "../button-component/button";
import {
  signInWithGooglePopup,
  createDocumentFromAuth,
} from "../../util/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createDocumentFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      resetFormFields();
    } catch (error) {}
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          required
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          value={password}
          required
          onChange={handleChange}
        />
        <div className="buttons-container">
          <ButtonComponent type="submit">Sign In</ButtonComponent>
          <ButtonComponent buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
