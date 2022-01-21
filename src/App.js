//import logo from './logo.svg';
//import './App.css';
import Home from './Home';
import {Link} from "react-router-dom";
import {Routes, Route} from "react-router";
import Earthquakes from './Earthquakes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to='/'>Home</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/Details:eventid' element={<Earthquakes/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
