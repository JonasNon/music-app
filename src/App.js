import './App.css';
import LoginForm from './LoginForm';
import React from 'react';
import { useState } from 'react';
import DashBoard from './DashBoard';
import UpperAppBar from './UpperAppBar';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  const toggleLogin = () => {
    loggedIn ? setLoggedIn(false) : setLoggedIn(true)
    console.log(loggedIn)
  }

  return (
    <div className="App">
      <UpperAppBar loggedIn={loggedIn} toggleLogin={toggleLogin}></UpperAppBar>
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
