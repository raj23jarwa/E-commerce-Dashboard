import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate("/")
    }
  })
  const collectData = async () => {
    console.log(name, email, password);

    // Fix the typo here: JSON.stringify, not Json.stringify
    let result = await fetch('http://localhost:5000/signup', {
      method: 'post',
      body: JSON.stringify({ name, email, password }), // Fix the typo here
      headers: {
        'Content-Type': 'application/json'
      },
    });

    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      navigate('/');
    }
  };

  return (
    <div className='maindiv'>
      <h1> Register</h1>
      <input className='inputBox' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />
      <input className='inputBox' type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
      <input className='inputBox' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
      <button onClick={collectData} className='signupbtn' type='button'> Signup</button>
    </div>
  );
};

export default Signup;
