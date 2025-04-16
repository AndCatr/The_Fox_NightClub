import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Room4 from './pages/Room4';
import Room4Carte from './pages/Room4Carte'; // << AGGIUNTO

const App = () => (
  <Router>
    <div style={{ padding: '2rem' }}>
      <h1>The Fox Night Club</h1>
      <nav>
        <ul>
          <li><Link to="/room4">🔻 La Camera di Báthory</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/room4" element={<Room4 />} />
        <Route path="/room4-carte" element={<Room4Carte />} /> {/* << AGGIUNTO */}
      </Routes>
    </div>
  </Router>
);

export default App;
