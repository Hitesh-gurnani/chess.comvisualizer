import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Username from './components/username'

function App() {
  const [username, updatedusername] = useState("")
  return (
    <>
      <div className="App">

        <h1><b><marquee>Chess.com visualizer </marquee></b></h1>

      </div>
      <Username updatedusername={updatedusername}></Username>
      {username}
    </>
  );
}

export default App;
