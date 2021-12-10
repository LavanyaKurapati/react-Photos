import Photos from "./components/Photos";
import "./App.css";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/" className="link-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link-item">
                About
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="album/:id" element={<Photos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
