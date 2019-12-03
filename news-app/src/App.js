import React from 'react';
import './App.css';
import Header from './Components/Header'
import { Link, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Link to="/">Test</Link>
      <Route path="/" component={Header} />
    </div>
  );
}

export default App;
