import React from 'react';
import logo from './Assets/logo1.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <nav className="App__nav">
        <p>just breathing</p>
      </nav>

      <header className="App__header">
        <img src={logo} className="App__logo" alt="logo" />
      </header>
      
      <footer className="App__footer">
        2019 All Rights Reserved by Matthew Israelson 
      </footer>
    </div>
  );
}

export default App;
