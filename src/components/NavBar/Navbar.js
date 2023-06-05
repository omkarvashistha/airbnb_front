import React, { useState } from 'react'
import './Navbar.css';

import SearchBar from './SearchBar';

const Navbar = ( { handleClick } ) => {

    const [isClicked,setisClicked]=useState(false);
    if(isClicked) handleClick(true);
    const [currentWidth,setCurrentWidth]=useState(window.innerWidth);

    //window.addEventListener('resize', setCurrentWidth(window.innerWidth))
    return(
        <>
            {
            <div className='navbar-wrapper' >
                <div className='logo'>
                    { currentWidth>360  ? (<img src="images/logo.png" alt="logo image"/>)
                    :(<img src="images/logo2.png" alt="logo image"/>)
                    }
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