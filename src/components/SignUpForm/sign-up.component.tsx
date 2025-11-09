import { useState, FormEvent, ChangeEvent } from "react";
import FormInput from "../form-input/form-input.component";
import { SignupContainer } from "./sign-up.style";
import Button from "../Botton/button.compoent";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.actions";
const defaultSignUpForm = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formData, setFormData] = useState(defaultSignUpForm);
  const { displayName, email, password, confirmPassword } = formData;
  const dispatch = useDispatch();
  const resetForm = () => {
    setFormData(defaultSignUpForm);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do no match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetForm();
    } catch (err) {
      console.log("Cannot Signup", err);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <SignupContainer id="signup">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and passwored</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          required
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
      <p style={{ textAlign: "center" }}>
        {" "}
        Already have an account?{" "}
        <span
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            color: "blue",
          }}
          onClick={() => {
            const siginIn = document.getElementById("signin") as HTMLElement;
            const signup = document.getElementById("signup") as HTMLElement;
            siginIn.style.display = "block";
            signup.style.display = "none";
          }}
        >
          {" "}
          Sign In{" "}
        </span>
      </p>
    </SignupContainer>
  );
};

export default SignUp;
