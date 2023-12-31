import React from 'react';
import { Link,useNavigate } from "react-router-dom";
import Logo from "../Images/e-com.jpg"

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate=useNavigate();

    const logout = ()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            <img src={Logo} alt='logo' className='logo'></img>
            { auth?
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
                <li>
                    <Link onClick={logout} to="/signup">Logout({JSON.parse(auth).name})</Link>
                </li>
                </ul>
                :
                <ul className='navul'>
                <li><Link to='/signup'>  Signup </Link></li>
               
               <li><Link to='/login'>  Login </Link></li>
               </ul>
            }
                     

          
        </div>
    )
}
export default Nav;