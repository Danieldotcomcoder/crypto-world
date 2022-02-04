import './App.css';
import {
  BrowserRouter as Router, Route, Routes, NavLink,
} from 'react-router-dom';
import { Home } from './components/home';
import { Stats } from './components/stats';
import { About } from './components/about';

function App() {
  return (
    <div className="App">
      <Router>
        <nav  className='navbar'>
          <ul>
            <li>
              <NavLink to="/">Crypto</NavLink>
            </li>
            <li> 
              <NavLink to='/stats'>Stats</NavLink>
              </li>
            <li>
               <NavLink to='/about'>About</NavLink>
            </li>
          </ul>

        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/about" element={<About />} />
          </Routes>
</Router>
    </div>
  );
}

export default App;
