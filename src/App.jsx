import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PokemonHomePage from './PokemonHomePage';
import PokemonUpdate from './PokemonUpdate';
import Signup from './Signup';
import Login from './Login';
import Navbar from './Navbar';

function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-slate-200">
      <div className="flex flex-col justify-center items-center w-1/4 h-full bg-slate-400 rounded-full border-x-8 border-slate-500 py-36 px-48 ">
        <h1 className="font-semibold text-2xl text-nowrap text-white">Welcome to Pokemon Spawner!</h1>
        <Link to="/pokemon-spawner" className="font-semibold text-2xl text-nowrap underline text-blue-500 mt-3">Pokemon Spawner</Link>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pokemon-spawner" element={<PokemonHomePage />} />
          <Route path="/pokemon-update/:id" element={<PokemonUpdate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
