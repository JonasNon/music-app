import './App.css';
import LoginForm from './LoginForm';
import React from 'react';
import { useState } from 'react';
import DashBoard from './DashBoard';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  const toggleLogin = () => {
    loggedIn ? setLoggedIn(false) : setLoggedIn(true)
    console.log(loggedIn)
  }

  return (
    <div className="App">
        {loggedIn ? 
        <div> 
          <DashBoard></DashBoard>
        </div> :
        <LoginForm toggleLogin={toggleLogin}></LoginForm>

      }
    </div>
  );
}

export default App;
