import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route } from 'react-router-dom'
import WallStreet from './Components/WallStreet'
import Business from './Components/Business'
import Bitcoin from './Components/Bitcoin'
import TechCrunch from './Components/TechCrunch'

function App() {
  return (
    <div className="bg-secondary">
      <div className="bg-dark">
        <nav className="sticky-top navbar navbar-dark bg-dark">
          <p className="navbar-brand font-weight-bold">News App</p>
          <Link className="text-white" to="/wallstreet">Wall Street</Link>
          <Link className="text-white" to="/business">Business</Link>
          <Link className="text-white" to="/bitcoin">Bitcoin</Link>
          <Link className="text-white mr-1" to="/techcrunch">TechCrunch</Link>
        </nav>
        <main>
          <Route path="/wallstreet" component={WallStreet} />
          <Route path="/business" component={Business} />
          <Route path="/bitcoin" component={Bitcoin} />
          <Route path="/techcrunch" component={TechCrunch} />
        </main>
      </div>
          <img src="https://cdn.freebiesupply.com/logos/large/2x/daily-news-1-logo-png-transparent.png" className="img-thumbnail bg-secondary" alt="news logo" />
    </div>
  );
  
}

export default App;
