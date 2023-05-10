
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Amazon from './Components/Amazon';
import SnapDeal from './Components/SnapDeal';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Flipkart from './Components/Flipkart';

function App() {
  const [count, setCount] = useState([])
  return (
    <div className="App">
      <Footer />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/amazon" element={<Amazon count={count} setCount={setCount} />}>
          </Route>
          <Route path="/snapdeal" element={<SnapDeal count={count} setCount={setCount} />}>
          </Route>
          <Route path="/flipkart" element={<Flipkart count={count} setCount={setCount} />}>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
