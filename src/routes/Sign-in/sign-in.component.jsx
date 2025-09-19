import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../utilities/firebase/firebase.utilis";
import SignUp from "../../components/SignUp/sign-up.component";

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="">
      <h1>This is Sign In.</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <SignUp/>
    </div>
  );
};

export default SignIn;

































    // useEffect(() => {
