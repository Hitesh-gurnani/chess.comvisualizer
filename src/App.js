import logo from './logo.svg';
import './App.css';
import Axios from 'axios'
import React, { useState } from 'react';
import Username from './components/username'
import Intro from './components/intro'
import Userprofile from './components/userprofile';
function App() {
  const [username, updatedusername] = useState("");
  const [istoggled, setistoggled] = useState(true);
  return (
    <>
      <div className="App">
        <h1><b><marquee>Chess.com visualizer </marquee></b></h1>
      </div>
      <Username updatedusername={updatedusername} setistoggled={setistoggled}></Username>
      {istoggled ? <Intro /> : <Userprofile />}
    </>
  );
}

export default App;
