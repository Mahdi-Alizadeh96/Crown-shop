import React, { Component } from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../Custom-button/CustomButton';
import FormInput from '../Form-input/FormInput';

export default class SignIn extends Component {

    constructor(props) {

        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ email: '', password: ''})
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name] : value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>sign in with your Email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput lable='email' name='email' type="email" handleChange={this.handleChange} value={this.state.email} required />
                    <FormInput lable='password' name='password' type="password" value={this.state.password} handleChange={this.handleChange} required />
                    <div className='button'>
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton isGoolgleSignIn onClick={signInWithGoogle} >SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
