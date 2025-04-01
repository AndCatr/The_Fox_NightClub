import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Room1 from './pages/Room1';
import Room2 from './pages/Room2';
import Room3 from './pages/Room3';
import Room4 from './pages/Room4';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room1" element={<Room1 />} />
      <Route path="/room2" element={<Room2 />} />
      <Route path="/room3" element={<Room3 />} />
      <Route path="/room4" element={<Room4 />} />
    </Routes>
  </Router>
);

export default App;
