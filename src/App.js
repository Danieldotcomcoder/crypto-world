import './App.css';
import {
  BrowserRouter as Router, Route, Routes, NavLink,
} from 'react-router-dom';
import React from 'react';
import Home from './components/home';
import About from './components/about';
import Details from './components/details';
import Stats from './components/stats';
import mainLogo from './images/cw.png';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <img className="logo" alt="logo-img" src={mainLogo} width={140} height={65} />
          <ul className="nav-list">
            <li>
              <NavLink className="linknav" style={{ textDecoration: 'none' }} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="linknav" style={{ textDecoration: 'none' }} to="/stats">Stats</NavLink>
            </li>
            <li>
              <NavLink className="linknav" to="/about" style={{ textDecoration: 'none' }}>About</NavLink>
            </li>
          </ul>

        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
