import React, {useState} from 'react';
import LanguageApi from '../Api.mjs';

import './LoginForm.css';




function LoginForm(){
    const [formData, setFormData]= useState({
        username: '',
        password: ''
      });
    
    const handleLogin = async () => {
        try {
          // Make a POST request to your backend's registration endpoint
          const response = await LanguageApi.login(formData.username, formData.password);
    
          // Handle the successful registration (e.g., redirect to a login page)
          console.log('User logged in with response:', response);
          setFormData({
            username: '',
            password: ''
          })
        } catch (error) {
          // Handle registration errors (e.g., display an error message)
          console.error('Error loggin user in:', error);
        }
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    

    return (
    <div className='login-form'>
      <h2>Log In!</h2>
      <form>
        {/* Form fields */}
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        
        <button type="button" onClick={handleLogin}>
          Log In
        </button>
      </form>
    </div>
  );
};


export default LoginForm;