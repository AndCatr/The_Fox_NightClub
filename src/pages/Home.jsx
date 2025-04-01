import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container">
    <h1>Welcome to The Fox Night Club</h1>
    <ul>
      <li><Link to="/room1">La Gabbia Dorata</Link></li>
      <li><Link to="/room2">Il Giardino di Danae</Link></li>
      <li><Link to="/room3">La Chambre de Sade</Link></li>
      <li><Link to="/room4">La Camera di Báthory</Link></li>
    </ul>
  </div>
);

export default Home;
