import SignUp from "../../components/SignUpForm/sign-up.component";
import SignIn from "../../components/SignInForm/signin.component";
import './authentication.style.scss';

const Authentication = () => {
  return (
    <div className="auth_container">
      <SignIn/>
      <SignUp/>
    </div>
  );
};

export default Authentication;