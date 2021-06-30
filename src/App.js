import { useState, useEffect } from 'react';
import Navigation from './UI/Navigation';
import Login from './UI/Login';
import Home from "./UI/Home";
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if(localStorage.Loginid == true){
      setIsLoggedIn(true)
    };
  }, [])


  return (
    <div className="App">
        <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div className="container">
          {
           isLoggedIn ? <Home/> : <Login setIsLoggedIn={setIsLoggedIn} /> 

          }
        </div> 
    </div>
  );
}

export default App;
