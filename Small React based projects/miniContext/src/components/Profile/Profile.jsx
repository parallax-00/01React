import React from 'react';
import UserContext from '../../context/UserContext.js';
import { useContext } from 'react';

function Profile() {
    const {user}=useContext(UserContext)
    
    if(!user) return <h5>Please Login</h5>
    return <div>Welcome {user.username}</div>
}

export default Profile;
