import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utilities/firebase/firebase.utilis';

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div className="">
            <h1>This is Sign In.</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google
            </button>
        </div>
    )
}

export default SignIn;