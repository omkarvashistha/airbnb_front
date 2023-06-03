import React, { useState,useEffect }  from 'react';
import SearchBar from './SearchBar';
import NewSearchBar from './NewSearchBar';

function NewNavbar( { handleClick } ) {

  const [isClicked,setisClicked]=useState(false);
  if(isClicked) handleClick(true);
  
  return (
          <div className='navbar-wrapper' > 
            <NewSearchBar setisClicked={ setisClicked }/>
                
          </div>
  )
}

export default NewNavbar