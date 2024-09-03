import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import DashBoard from './components/DashBoard';
import UpperAppBar from './components/UpperAppBar';
import cookie from "cookie";

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState("")

  const handleUsernameInput = (event) => {
    setUsername(event.target.value)
  }

  const checkIfLoggedIn = () => {
    if (cookie.parse(document.cookie).loggedIn === "true") {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }

  useEffect(() => checkIfLoggedIn(), [])

  const toggleLogin = () => {
    if (loggedIn) {
      setLoggedIn(false)
      document.cookie = cookie.serialize("loggedIn", "false", { maxAge: 1000 * 60 });
      document.cookie = cookie.serialize("username", null, { maxAge: 0 });

    } else {
      setLoggedIn(true)
      document.cookie = cookie.serialize("loggedIn", "true", { maxAge: 1000 * 60 });
      document.cookie = cookie.serialize("username", username, { maxAge: 1000 * 60 });

      // console.log(typeof cookie.parse(document.cookie).loggedIn)
    }
  }

  return (
    <div className="App">
      {/* <button onClick={() => console.log(cookie.parse(document.cookie).loggedIn)}>test</button> */}
      <UpperAppBar loggedIn={cookie.parse(document.cookie).loggedIn === "true"} toggleLogin={toggleLogin}></UpperAppBar>
        {cookie.parse(document.cookie).loggedIn === "true" ? 
        <div> 
          <DashBoard username={cookie.parse(document.cookie).username}></DashBoard>
        </div> :
        <LoginForm username={username} handleUsernameInput={handleUsernameInput} toggleLogin={toggleLogin}></LoginForm>

      }
    </div>
  );
}

export default App;
