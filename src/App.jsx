import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PokemonHomePage from './PokemonHomePage';
import PokemonUpdate from './PokemonUpdate';

function Home() {
  return (
    <div>
      <div>
        <h1>Welcome to Pokemon Spawner!</h1>
        <Link to="/pokemon-spawner">Pokemon Spawner</Link>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon-spawner" element={<PokemonHomePage />} />
          <Route path="/pokemon-update/:id" element={<PokemonUpdate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
