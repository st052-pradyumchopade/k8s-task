import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [greeting, setGreeting] = useState('Loading...');

  useEffect(() => {
    fetch('/greeting')
      .then(res => res.json())
      .then(data => setGreeting(data.message))
      .catch(() => setGreeting('Error fetching greeting.'));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ fontSize: '2.5rem', margin: '20px 0', color: '#61dafb' }}>{greeting}</h1>
      </header>
    </div>
  );
}

export default App;
