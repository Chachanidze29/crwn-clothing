import { React, useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInContainer, Title, ButtonsContainer } from './sign-in.styles';
import { googleSignInStart, emailSignInStart } from '../../redux/user/useractions';
import { connect } from 'react-redux';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCreadentials, setCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCreadentials;

    const handleSubmit = async e => {
        e.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = e => {
        const { value, name } = e.target;
        setCredentials({
            ...userCreadentials,
            [name]: value
        })
    }

    return (
        <SignInContainer>
            <Title className='title'>I Already have an account</Title>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    required={true}
                    autoComplete='off'
                    label='email'
                    handleChange={handleChange}
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    required={true}
                    autoComplete='off'
                    label='password'
                    handleChange={handleChange}
                />
                <ButtonsContainer className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton
                        type="button"
                        onClick={googleSignInStart}
                        isGoogleSignIn={true}>Sign In With Google
                    </CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);