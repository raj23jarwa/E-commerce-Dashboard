import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');

    useEffect(() => {
        if (auth) {
            navigate("/")
        }
    })
    const handleLogin = async () => {
        console.log(email, password);

        // Corrected the syntax for sending JSON data
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }), // Corrected here
            headers: {
                'Content-Type': 'application/json'
            },

        });

        result = await result.json();
        console.log(result);
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/")
        }
        else {
            alert("please enter connect details")
        }
    };

    return (
        <div className='login'>
            <h1>Login</h1>
            <input
                type='text'
                placeholder='Enter email'
                className='inputBox'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <input
                type='password'  // Changed to password type for sensitive information
                placeholder='Enter password'
                className='inputBox'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button onClick={handleLogin} className='loginbtn' type='button'>
                Login
            </button>
        </div>
    );
};

export default Login;
