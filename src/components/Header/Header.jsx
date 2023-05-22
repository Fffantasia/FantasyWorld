import React from 'react';
import './header.css';
import logo from '../../assets/logo1.png';

function Header(){
    return(
        <div className='header'>
            <div className='logo-cont'>
                <img className='logo' src={logo}/>
            </div>
            <div className='nav-menu-cont'>
                <ul className='nav-menu'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Info</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Header;