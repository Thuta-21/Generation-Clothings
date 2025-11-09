import { useState, FormEvent, ChangeEvent } from "react";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Botton/button.compoent";
import {
  SigninContainer,
  BtnContainer,
  SignInBtn,
  SignInGoogleBtn,
} from "./signin.style";
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(emailSiginInStart(email, password));
      resetForm();
    } catch (e) {
      console.log("Sign in failed", e);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const signInwithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  return (
    <SigninContainer id="signin">
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
          <SignInBtn type="submit">Sign In</SignInBtn>
          <SignInGoogleBtn
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInwithGoogle}
          >
            Google Sign In
          </SignInGoogleBtn>
        </BtnContainer>
      </form>
      <p style={{textAlign: 'center'}}>
        {" "}
        Haven't account?{" "}
        <span
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            color: "blue",
          }}
          onClick={() => {
            const siginIn = document.getElementById("signin") as HTMLElement;
            const signup = document.getElementById("signup") as HTMLElement;
            siginIn.style.display = "none";
            signup.style.display = "block";
          }}
        >
          {" "}
          Sign Up{" "}
        </span>
      </p>
    </SigninContainer>
  );
};

export default SignIn;
