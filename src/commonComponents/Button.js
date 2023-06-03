import React, { useState,useEffect } from 'react'

function Button( {cssclass,DivText,handleClick,isClicked,val} ) {

    useEffect(()=>{
        console.log("button");
    },[]);


    return (
    <>
        
        <button id={val} className={cssclass} onClick={handleClick} value={val}>
            {DivText}
        </button>

    </>

  )
}

export default Button