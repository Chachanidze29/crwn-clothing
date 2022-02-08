import { React, useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { SignUpStart } from '../../redux/user/useractions';

import { SignUpContainer } from './sign-up.styles';
import { Title } from '../sign-in/sign-in.styles';

const SignUp = ({ SignUpStart }) => {
    const [userCreadentials, setCredentials] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });

    const { displayName, email, password, confirmPassword } = userCreadentials;

    const handleSubmit = async event => {
        event.preventDefault();
        SignUpStart(displayName, email, password, confirmPassword);
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setCredentials({ ...userCreadentials, [name]: value });
    }

    return (
        <SignUpContainer>
            <Title className='title'>I do not have an account</Title>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required={true}
                    autoComplete='off'
                    minLength='6'
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required={true}
                    autoComplete='off'
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required={true}
                    autoComplete='off'
                    minLength='6'
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required={true}
                    autoComplete='off'
                    minLength='6'
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </SignUpContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    SignUpStart: (displayName, email, password, confirmPassword) => dispatch(SignUpStart({ displayName, email, password, confirmPassword }))
})

export default connect(null, mapDispatchToProps)(SignUp);