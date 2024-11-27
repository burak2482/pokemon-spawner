import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="flex flex-row justify-between items-center py-4 px-16">
        <Link to="/" className="font-semibold text-3xl">
          Pokemon Spawner
        </Link>
        <nav>
          <div>
            <Link to="/login" className="mr-16 text-2xl font-semibold">Login</Link>
            <Link to="/signup" className="mr-10 text-2xl font-semibold">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
