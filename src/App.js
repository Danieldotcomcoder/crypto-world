import './App.css';
import {
  BrowserRouter as Router, Route, Routes, NavLink,
} from 'react-router-dom';
import { Home } from './components/home';
import { Stats } from './components/stats';

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
              <NavLink to='Stats'>Stats</NavLink>
              </li>
            <li>
               <NavLink to='About'>About</NavLink>
            </li>
          </ul>

        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Stats" element={<Stats />} />
          </Routes>
</Router>
    <Home/>
    </div>
  );
}

export default App;
