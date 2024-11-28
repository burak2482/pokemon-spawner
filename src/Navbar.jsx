import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/logoutHook'
import { AuthContext } from '../context/authContext';
import { useContext } from "react";

const Navbar = () => {

  const { logout } = useLogout()
  const { user } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
  }

  return (
    <header>
      <div className="flex flex-row justify-between items-center py-2 md:py-4 md:px-16 bg-customWhite">
        <div className="flex flex-row justify-center items-center">
        <Link to="/" className="font-bold text-xl ml-3 md:text-3xl text-nowrap">
        <img src='./bulbasaur.png'/>
          </Link>
          <Link to="/" className="font-bold text-xl ml-3 md:text-3xl text-nowrap">
              Pokemon Spawner
          </Link>
        </div>
        <nav>
          {user && (<div>
            <span className="font-semibold mr-3 ">{user.email}</span>
            <button className="mr-2 text-lg md:mr-16 md:text-2xl font-semibold px-2 border-2 text-customGreen border-customGreen rounded-sm" onClick={handleLogout}>Log out</button>
          </div>)}
          {!user && (<div>
            <Link to="/login" className="mr-2 text-lg md:mr-16 md:text-2xl font-semibold px-2 border-2 border-lime-400 rounded-sm">Login</Link>
            <Link to="/signup" className="mr-2 text-lg md:mr-10 md:text-2xl font-semibold px-2 border-2 border-lime-400 rounded-sm">Signup</Link>
          </div>)}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
