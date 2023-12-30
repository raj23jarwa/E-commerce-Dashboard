import React from 'react';
import { Link,useNavigate } from "react-router-dom";
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate=useNavigate();

    const logout = ()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            <ul className='navul'>
                <li>
                    <Link to='/'>  Home </Link>
                </li>
                <li>
                    <Link to='/add'>  Add </Link>
                </li>
                <li>
                    <Link to='/update'>  Update Products </Link>
                </li>
                <li>
                    <Link to='/profile'>  Profile </Link>
                </li>
                <li onClick={logout}> 
                    {auth ? <Link to='/signup'>  Logout </Link> :
                    <Link to='/signup'>  Signup </Link>}
                </li>
            </ul>
        </div>
    )
}
export default Nav;