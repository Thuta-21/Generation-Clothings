import { useState } from "react"
import { createAuthWithEmailPassword, createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utilis";
import FormInput from "../form-input/form-input.component";
import './sign-up.style.scss';
import Button from "../Botton/button.compoent";

const defaultSignUpForm = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    const [formData, setFormData] = useState(defaultSignUpForm);
    const {displayName, email, password, confirmPassword} = formData;

    const resetForm = () => {
        setFormData(defaultSignUpForm);
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!password === confirmPassword) {
            alert('Password do no match');
            return;
        }
        
        try {
            const {user} = await createAuthWithEmailPassword(email, password);
            const userDocRef = await createUserDocumentFromAuth(user, {displayName});
            resetForm();
            alert('Successfully Sign Up');
        } catch(err) {
            if(err.code === 'auth/email-already-in-use') {
                alert('Cannot Sign Up! Email alreday in use')
            } else {
                console.log('Error', err)
            }
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});
    }

    return (
        <div className="signup-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and passwored</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type="text" name="displayName" onChange={handleChange} value={displayName} required/>
                <FormInput label='Email' type="email" name="email" onChange={handleChange} value={email} required/>
                <FormInput label='Password' type="password" name="password" onChange={handleChange} value={password} required/>
                <FormInput label='Confirm Password' type="password" name="confirmPassword" onChange={handleChange} value={confirmPassword} required/>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUp;