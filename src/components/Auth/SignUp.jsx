import React, { Component } from 'react';
import { auth , createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../Custom-button/CustomButton';
import FormInput from '../Form-input/FormInput';


export default class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }


    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email ,password ,confirmPassword} = this.state;

        if(password !== confirmPassword) return alert('password dont match');

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
            })
        } catch(error) {
            console.error(error);
        }
    }


    handleChange = event => {
        const { name, value} = event.target;

        this.setState({[name] : value})
    }

    render() {
        const {displayName, email ,password ,confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} lable='Dispaly Name' required />
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} lable='Email' required />
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} lable='password' required />
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} lable='Confirm Passoword' required />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}
