import React, { useState } from 'react'
import './Navbar.css';
import SearchBar from './SearchBar';

const Navbar = ( {handleClick } ) => {

    const [isClicked,setisClicked]=useState(false);
    if(isClicked) handleClick(true);

    return(
        <>
            {
            <div className='navbar-wrapper' >
                <div className='logo'>
                    <img src="images/logo.png" alt="logo image"/>
                </div>
                
                <SearchBar setisClicked={setisClicked}/>
                
                <div className='extra-text'>

                </div>

                <div className='profile icon'>

                </div>
            </div>
            }
        </>
    )
}

export default Navbar