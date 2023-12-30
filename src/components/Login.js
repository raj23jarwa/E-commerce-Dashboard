import React from 'react'

const Login = () => {
    const[email,setEmail]=React.useState('');
    const[password,setPassword]=React.useState('');
    const handleLogin=()=>{
        console.log(email,password);
    }
  return (
    <div className='login'>
        <h1>Login</h1>
        <input type='text' placeholder='Enter email' className='inputBox'
        onChange={(e)=>setEmail(e.target.value)} value={email} />

        <input type='text' placeholder='Enter password' className='inputBox' 
        onChange={(e)=>setPassword(e.target.value)} value={password} />
        <button onClick={handleLogin} className='loginbtn' type='button'>Login</button>
    </div>
  )
}

export default Login