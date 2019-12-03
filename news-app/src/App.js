import React from 'react';
import './App.css';
import Header from './Components/Header'
import { Link, Route } from 'react-router-dom'
import WallStreet from './Components/WallStreet'
import Business from './Components/Business'

function App() {
  return (
    <div className="App">
      <Header />
      <nav>
        <Link to="/wallstreet">Wall Street</Link>
        <Link to="/business">Business</Link>
      </nav>
      <main>
        <Route path="/wallstreet" component={WallStreet} />
        <Route path="/business" component={Business} />
      </main>
    </div>
  );
}

export default App;
