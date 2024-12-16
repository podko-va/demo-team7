import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom"; 

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="p-4 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center">

        <Link to="/" className="text-xl font-bold ">
          Event Management
        </Link>

        {user ? (
          <div>
            <span className="mr-4">Welcome, {user.name}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-x-4">
            <a
              href="/register"
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
            >
              Register
            </a>
            <a
              href="/login"
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              Login
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
