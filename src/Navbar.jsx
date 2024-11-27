import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="flex flex-row justify-between items-center py-2 md:py-4 md:px-16">
        <Link to="/" className="font-semibold text-xl ml-3 md:text-3xl text-nowrap">
          Pokemon Spawner
        </Link>
        <nav>
          <div>
            <Link to="/login" className="mr-2 text-lg md:mr-16 md:text-2xl font-semibold px-2 border-2 border-lime-400 rounded-sm">Login</Link>
            <Link to="/signup" className="mr-2 text-lg md:mr-10 md:text-2xl font-semibold px-2 border-2 border-lime-400 rounded-sm">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;