import './App.css';
import Navbar from './components/NavBar/Navbar';
import NewNavbar from './components/NavBar/NewNavbar'
import { useState } from 'react';

function App() {

  const [click,setClick]=useState(false);

  const handleClick=( val )=>{
    if(val) setClick(true);
  }

  return (
    <div className="App">
      <div>
        {click?<NewNavbar handleClick={ handleClick }/>:
          <Navbar handleClick={ handleClick } />
        }
      </div>

      <div onClick={ () => {setClick(false)}}>
        Images
      </div>
    </div>
  );
}

export default App;
