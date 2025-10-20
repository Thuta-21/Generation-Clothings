import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Botton/button.compoent";
import { SigninContainer, BtnContainer } from "./signin.style";
import { useDispatch } from "react-redux";
import {
  emailSiginInStart,
  googleSignInStart,
} from "../../store/user/user.actions";
const defaultSignInForm = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formData, setFormData] = useState(defaultSignInForm);
  const { email, password } = formData;
  const dispatch = useDispatch();

  const resetForm = () => {
    setFormData(defaultSignInForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(emailSiginInStart(email, password));
      resetForm();
    } catch (e) {
      console.log("Sign in failed", e);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const signInwithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  return (
    <SigninContainer>
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        <BtnContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInwithGoogle}
          >
            Google Sign In
          </Button>
        </BtnContainer>
      </form>
    </SigninContainer>
  );
};

export default SignIn;
