import React from 'react'
import './Navbar.css';
import SearchBar from './SearchBar';

const Navbar = () => {
    return(
        <div className='navbar-wrapper'>
            <div className='logo'>
                <img src="images/logo.png" alt="logo image"/>
            </div>
            
            <SearchBar/>

            <div className='extra-text'>

            </div>

            <div className='profile icon'>

            </div>
        </div>
    )
}

export default Navbar