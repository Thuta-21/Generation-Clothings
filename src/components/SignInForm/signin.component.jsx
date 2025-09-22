import { useState } from "react"
import { createUserDocumentFromAuth, signInWithGooglePopup, signInUserWithEmailAndPassword } from "../../utilities/firebase/firebase.utilis";
import FormInput from "../form-input/form-input.component";
import Button from "../Botton/button.compoent";
import './signin.style.scss';

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
            const {user} = await signInUserWithEmailAndPassword(email, password);
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
        <div className="signin-container">
            <h2>Already have an account?</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type="email" name="email" onChange={handleChange} value={email} required/>
                <FormInput label='Password' type="password" name="password" onChange={handleChange} value={password} required/>
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button buttonType='google' type='button' onClick={signInwithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;