import React , {useEffect, useState}  from 'react'
import './SearchBar.css';
import Button from '../../commonComponents/Button';

function SearchBar( { setisClicked } ) {

    //taking state from child`
   
    const handleClick=(e)=>{
        setisClicked(true);
        console.log(e.target.value);
    }

   

    useEffect(()=>{
        console.log("searchbar");
    },[]);

    return (
    
    <div className='search-bar'>
        
        <Button 
            cssclass="any-where" 
            DivText="Anywhere"
            handleClick={handleClick}
            val="any-where"   
        />
         <span className="searchbar_line"></span>

        <Button 
            cssclass="any-week" 
            DivText="Any Week" 
            handleClick={handleClick} 
            val="any-week"  
        />
         <span className="searchbar_line"></span>

        <Button 
            cssclass="add-guests" 
            DivText="Add guests" 
            handleClick={handleClick}
            val="add-guests"     
        />

    </div>

  )
}

export default SearchBar;