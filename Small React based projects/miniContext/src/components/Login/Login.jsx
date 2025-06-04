import React, { useState, useContext } from 'react';
import UserContext from '../../context/UserContext.js';


function Login() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
  return (
      <div>
                   
          <input type="text"
              onChange={(e)=>{setUsername(e.target.value)}}
              placeholder='username' value={username} />
          {' '}
          <input type="text"
              onChange={(e)=>{setPassword(e.target.value)}}
              placeholder='password' value={password} />
          <button id='butt' onClick={handleSubmit}>Submit</button>

    </div>
  );
}

export default Login;
