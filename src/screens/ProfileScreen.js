import React from 'react';
import Nav from '../components/Nav';
import './ProfileScreen.css';
import { useSelector } from 'react-redux';
import {selectUser} from '../features/userSlice';
import {auth} from '../firebase';

function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className='profile-screen'>
            <Nav />
            <div className='profile-body'>
                <h1 className='profile-title'>Edit Profile</h1>
                <hr />
                <div class="lower-section">
                    <img
                        className='profile-avatar'
                        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                        alt='avatar'
                    />
                    <div className="plan-detail">
                        <div className='profile-email'>{user.email}</div>
                        <h3>Plans (Current Plan: {})</h3>
                        <hr />
                        <p>Renewal Date: {}</p>
                        <div className="plan">
                            <div className="resolution-info">
                                <h4>Netflix Standard</h4>
                                <h4>1080p</h4>
                            </div>
                            <button>Subscribe</button>
                        </div>
                        <div className="plan">
                            <div className="resolution-info">
                                <h4>Netflix Standard</h4>
                                <h4>1080p</h4>
                            </div>
                            <button>Subscribe</button>
                        </div>
                        <div className="plan">
                            <div className="resolution-info">
                                <h4>Netflix Standard</h4>
                                <h4>1080p</h4>
                            </div>
                            <button>Subscribe</button>
                        </div>
                        <button className="signout-btn" onClick={() => auth.signOut()}>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileScreen;
