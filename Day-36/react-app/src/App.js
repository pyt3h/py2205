import './App.css';
//import {x,y} from './lib';
//import z from './lib';
import {Routes, Route, Link} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
function App() {
  return (
    <>
      <Link to="/">Home</Link> {" "}
      <Link to="/about">About</Link>
      <br/>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="about" element={<About/>} />
      </Routes>
    </>
  );
}

export default App;
