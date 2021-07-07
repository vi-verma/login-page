import { useState, useEffect } from 'react';
import Navigation from './UI/Navigation';
import Login from './UI/Login';
import Home from "./UI/Home";
import './App.css';
import {TOKEN_KEY} from './constants';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    fetch('http://localhost:3000/users/me', {
      method: "GET",
      headers: {
        // 'application-type': 'application/json',
        "token": localStorage.token,
      },
      mode: "cors"
    }).then((response) => {
      return response.json();
    }).then(Data => {
      // console.log("me data", Data.error)
      if(Data.error !== "Token expired"){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
        localStorage.removeItem(TOKEN_KEY);
      }
    
    }).catch((err) =>{
      alert(err)
    })
  },[]);

  // useEffect(() => {
  //   if(localStorage.getItem(TOKEN_KEY)){

  //     setIsLoggedIn(true)
  //   };
  // }, [])


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
