import './App.css';
import {
  BrowserRouter as Router, Route, Routes, NavLink,
} from 'react-router-dom';
import { Home } from './components/home';
import { About } from './components/about';
import { Details } from './components/fetchAPI';

function App() {
  return (
    <div className="App">
      <Router>
        <nav  className='navbar'>
          <ul>
            <li>
              <NavLink style={{textDecoration: 'none'}} to="/">Crypto</NavLink>
            </li>
            <li>
               <NavLink to='/about' style={{textDecoration: 'none'}}>About</NavLink>
            </li>
          </ul>

        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/details" element={<Details />} />
          </Routes>
</Router>
    </div>
  );
}

export default App;
