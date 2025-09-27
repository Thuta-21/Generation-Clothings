import SignUp from "../../components/SignUpForm/sign-up.component";
import SignIn from "../../components/SignInForm/signin.component";
import {AuthContainer} from './authentication.style';

const Authentication = () => {
  return (
    <AuthContainer>
      <SignIn/>
      <SignUp/>
    </AuthContainer>
  );
};

export default Authentication;