import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import app from '../FbConfig';
import MountainPng from '../../assets/moon-surface-hd.png';

const Register = () => {
  useEffect(() => {
    localStorage.clear();
    let un = localStorage.getItem('un');
    if (un !== null) {
      nav('/home');
    }
  }, []);

  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [userType, setUserType] = useState('user'); // Default to user login

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up successfully
          // Add code to save username to database or use it as needed
          nav('/login');
        })
        .catch((error) => {
          console.error('Error signing up:', error);
          alert('Issue: ' + error.message);
        });
    } else {
      alert('Passwords do not match');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden">
      <img src={MountainPng} alt="" className="absolute inset-0 object-cover w-full h-full brightness-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md z-10">
        <form className="text-center" onSubmit={handleSignup}>
          <span className="block text-2xl mb-4">Sign Up </span>
          <label htmlFor="username" className="block mb-2">
            Username
            <input type="text" id="username" name="username" required className="border border-gray-300 rounded-md p-2 w-full" onChange={handleUsernameChange} value={username} />
          </label>
          <label htmlFor="email" className="block mb-2">
            Email
            <input type="email" id="email" name="email" required className="border border-gray-300 rounded-md p-2 w-full" onChange={handleEmailChange} value={email} />
          </label>
          <label htmlFor="password" className="block mb-2">
            Password
            <input type="password" id="password" name="password" required className="border border-gray-300 rounded-md p-2 w-full" onChange={handlePasswordChange} value={password} />
          </label>
          <label htmlFor="confirmPassword" className="block mb-2">
            Confirm Password
            <input type="password" id="confirmPassword" name="confirmPassword" required className="border border-gray-300 rounded-md p-2 w-full" onChange={handleConfirmPasswordChange} value={confirmPassword} />
          </label>
          <div className="mb-2">
            <label htmlFor="userType" className="mr-2">
              User
              <input type="radio" name="userType" value="user" checked={userType === 'user'} onChange={handleUserTypeChange} className="ml-2" />
            </label>
            <label htmlFor="userType">
              Organization
              <input type="radio" name="userType" value="organization" checked={userType === 'organization'} onChange={handleUserTypeChange} className="ml-2" />
            </label>
          </div>
          <input type="submit" value="Signup" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600" />
        </form>
      </div>
    </div>
  );
};

export default Register;
