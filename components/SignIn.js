'use client'
import React, { useState } from 'react';
import localStorage from 'local-storage';
import { FaUserShield } from 'react-icons/fa';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const handleUserChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePassChange = (event) => {
    setPassword(event.target.value);
  };

  const openDash = async () => {
    if (!username || !password) {
      setErr('Empty values given!');
    } else {
      const data = { username: username, password: password };

      try {
        const response = await fetch('http://localhost:3000/api/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const responseData = await response.json();
          if(responseData.flag === 0){
            if (typeof window !== 'undefined') {
                // Save data to localStorage
                localStorage.set('user', username);
              }
            window.location = '/dashboard';
          }else{
            setErr(`Error ${responseData.body ? responseData.body : responseData.status}`)
          }
        } else {
          setErr('Failed to authenticate');
        }
      } catch (error) {
        console.error('Error:', error);
        setErr('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className='d-flex flex-column mt-3'>
      <p>Log in to access this system.</p>
      <div className='text-danger px-3 rounded-5'>{err && <p>{err}</p>}</div>
      <input
        className='px-3 py-2 my-2'
        placeholder=' Username'
        onChange={handleUserChange}
        value={username}
      />
      <input
        className='px-3 py-2 my-2'
        placeholder='Password'
        type='password'
        onChange={handlePassChange}
        value={password}
      />
      <br />
      <div className='btn btn-dark my-3' onClick={openDash}>
        <p>Log In</p>
      </div>
    </div>
  );
};

export default SignIn;
