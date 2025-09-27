import { useState } from "react"
import { signInWithGooglePopup, signInUserWithEmailAndPassword } from "../../utilities/firebase/firebase.utilis";
import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../Botton/button.compoent";
import {SigninContainer, BtnContainer} from './signin.style';

const defaultSignInForm = {
    email: '',
    password: ''
}

const SignIn = () => {
    const [formData, setFormData] = useState(defaultSignInForm);
    const {email, password} = formData;

    const resetForm = () => {
        setFormData(defaultSignInForm);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInUserWithEmailAndPassword(email, password);
            resetForm();
        } catch(err) {
            if(err.code === 'auth/invalid-credential') {
                alert('Invalid credentials')
            } else {
                console.log('Error', err)
            }
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const signInwithGoogle = async () => {
        await signInWithGooglePopup();
    };

    return (
        <SigninContainer>
            <h2>Already have an account?</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type="email" name="email" onChange={handleChange} value={email} required/>
                <FormInput label='Password' type="password" name="password" onChange={handleChange} value={password} required/>
                <BtnContainer>
                    <Button type="submit">Sign In</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={signInwithGoogle}>Google Sign In</Button>
                </BtnContainer>
            </form>
        </SigninContainer>
    )
}

export default SignIn;