import React from 'react';
import './Overlay.css';

function Overlay( {isOpen,onClose,children} ) {
  
    return (
    <>
        {
            isOpen ? (
                <div className='overlay'>
                    <div className='overlay-background' onClick={onClose
                    }>
                    <div className='overlay__container'>
                        <div className='overlay__controls'>
                            <button 
                                className='overlay__close'
                                type='button'
                                onClick={onClose}
                            />
                        </div>
                        { children }
                    </div>

                    </div>
                </div>
            ):null}
    </>
  )
}

export default Overlay