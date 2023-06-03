import React , {useEffect, useState}  from 'react'
import './SearchBar.css';
import Button from '../../commonComponents/Button';

function NewSearchBar( { setisClicked } ) {

    //taking state from child`
   
    const handleClick=(e)=>{
        setisClicked(true);
        console.log(e.target.value);
    }

   

    useEffect(()=>{
        console.log("new searchbar");
    },[]);

    return (
    
    <div className='search-bar'>
        
        <Button 
            cssclass="where" 
            DivText="Where"
            handleClick={handleClick}  
        />

        <Button 
            cssclass="Check-in" 
            DivText="CheckIn" 
            handleClick={handleClick}  
        />

        <Button 
            cssclass="Checkout" 
            DivText="Check out" 
            handleClick={handleClick}
            val="add-guests"     
        />

    </div>

  )
}

export default NewSearchBar;