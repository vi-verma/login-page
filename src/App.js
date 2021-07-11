import { useState, useEffect } from "react";
import Navigation from "./UI/Navigation";
import Login from "./UI/Login";
import Home from "./UI/Home";
import "./App.css";
import { TOKEN_KEY } from "./constants";
import SignUp from "./UI/signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const UserFetch = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/me", {
        method: "GET",
        headers: {
          // 'application-type': 'application/json',
          token: localStorage.token,
        },
        mode: "cors",
      });
      try {
        const Data = await response.json();
        if (Data.error !== "Token expired") {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          localStorage.removeItem(TOKEN_KEY);
        }
      } catch (error) { 
        console.log("JSON err", error);
      }
    } catch (error) {
      console.log("FETCH", error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      console.log("useEffect conditional");
      UserFetch();
    }
    return;
  }, []);
  //      or
  //   useEffect(() => {
  //   fetch('http://localhost:3000/users/me', {
  //     method: "GET",
  //     headers: {
  //       // 'application-type': 'application/json',
  //       "token": localStorage.token,
  //     },
  //     mode: "cors"
  //   }).then((response) => {
  //     return response.json();
  //   }).then(Data => {
  //     // console.log("me data", Data.error)
  //     if(Data.error !== "Token expired"){
  //       setIsLoggedIn(true);
  //     }else{
  //       setIsLoggedIn(false);
  //       localStorage.removeItem(TOKEN_KEY);
  //     }
  //   }).catch((err) =>{
  //     alert(err)
  //   })
  // },[]);

  return (
    <div className="App">
      <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="container">
        {isLoggedIn ? <Home setIsLoggedIn={setIsLoggedIn}/> : <Login setIsLoggedIn={setIsLoggedIn} />}
        <SignUp/>
      </div>
    </div>
  );
}

export default App;
