import React, {useState} from 'react';
import LanguageApi from '../Api.mjs';

import './SignupForm.css'


function SignupForm(){
    const [formData, setFormData]= useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
      });
    
    const handleRegistration = async () => {
        try {
          // Make a POST request to your backend's registration endpoint
          const response = await LanguageApi.signup(formData);
    
          // Handle the successful registration (e.g., redirect to a login page)
          console.log('User registered with response:', response);
          setFormData({
            username: '',
            password: '',
            email: '',
            firstName: '',
            lastName: ''
          })
        } catch (error) {
          // Handle registration errors (e.g., display an error message)
          console.error('Error registering user:', error);
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
    <div className='signup-form'> 
      <h2>Sign Up!</h2>
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
         <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
         <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
         <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <button type="button" onClick={handleRegistration}>
          Sign Up
        </button>
      </form>
    </div>
  );

};


export default SignupForm;