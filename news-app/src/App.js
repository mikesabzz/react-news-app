import React from 'react';
import './App.css';
import Header from './Components/Header'
import { Link, Route } from 'react-router-dom'
import Home from './Components/Home'
import WallStreet from './Components/WallStreet'
import Business from './Components/Business'
import Bitcoin from './Components/Bitcoin'
import TechCrunch from './Components/TechCrunch'

function App() {
  return (
    <div className="App">
      <Header />
      <nav>
        <Link to="/homepage">Home Page</Link>
        <Link to="/wallstreet">Wall Street</Link>
        <Link to="/business">Business</Link>
        <Link to="/bitcoin">Bitcoin</Link>
        <Link to="/techcrunch">TechCrunch</Link>
      </nav>
      <main>
        <Route path="/homepage" component={Home} />
        <Route path="/wallstreet" component={WallStreet} />
        <Route path="/business" component={Business} />
        <Route path="/bitcoin" component={Bitcoin} />
        <Route path="/techcrunch" component={TechCrunch} />
      </main>
    </div>
  );
}

export default App;
