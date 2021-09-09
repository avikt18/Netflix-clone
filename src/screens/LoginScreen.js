import React, { useState } from 'react';
import SignInScreen from './SignInScreen';
import './LoginScreen.css';

function LoginScreen() {
    const [signInState, setSignInState] = useState(true);
    return (
        <div className='login-screen'>
            <img
                className='netflix-logo'
                src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                alt='logo'
            />
            {!signInState && <button className='login-screen-btn' onClick={() => setSignInState(true)}>Sign In</button>}
            <div className='background-gradient' />
            <div className='login-screen-body'>
                {signInState ? (
                    <SignInScreen />
                ) :
                    <>
                        <h1 className='title'>Unlimited movies, TV shows and more.</h1>
                        <h3 className='caption'>Watch anywhere. Cancel anytime.</h3>
                        <p className='email-label'>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className='email-form'>
                            <form >
                                <input id='email-input' type='email' name='email' placeholder='Email address' />
                                <button className='email-btn' onClick={() => setSignInState(true)}>Get Started &gt;</button>
                            </form>
                        </div>
                    </>
                    }
            </div>
        </div>
    )
}

export default LoginScreen;
