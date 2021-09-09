import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './Nav.css';

function Nav() {
    const [showNav, setShowNav] = useState(false);
    const history = useHistory();
    const transitionNavBar = () => {
        if(window.scrollY > 100){
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    },[]);

    return (
        <div className={`nav ${showNav && 'nav-black'}`}>
            <div className="nav-contents">
                <img
                    onClick={() => history.push('/')}
                    className='nav-logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                    alt='netflix logo'
                />
                <img
                    onClick={() => history.push('/profile')}
                    className='nav-avatar'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    alt='avatar'
                />
            </div>
            
        </div>
    )
}

export default Nav;
