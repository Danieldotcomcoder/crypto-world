import './App.css';
import {
  BrowserRouter as Router, Route, Routes, NavLink,
} from 'react-router-dom';
import { Home } from './components/home';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li></li>
            <li></li>
          </ul>

        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
</Router>
    <Home/>
    </div>
  );
}

export default App;
