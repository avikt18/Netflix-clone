import React, { useRef } from 'react';
import './SignInScreen.css';
import { auth } from '../firebase';

function SignInScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    function signIn(e) {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
            .then(authUser => {
                console.log(authUser);
            })
            .catch(err => {
                alert(err);
            })
    }

    function register(e) {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then(authUser => {
            console.log(authUser);
        })
        .catch(err => {
            alert(err);
        })
    }
    
    return (
        <div className='sign-in'>
            <h1>Sign In</h1>
            <form>
                <input ref={emailRef} type='email' name='email' placeholder='email address' />
                <input ref={passwordRef} type='password' name='password' placeholder='password' />
                <button type='submit' onClick={signIn}>Sign In</button>
            </form>
            <h4>New to Netflix? <span onClick={register}>Sign Up now.</span></h4>
        </div>
    )
}

export default SignInScreen;
