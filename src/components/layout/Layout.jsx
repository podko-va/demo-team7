import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, UserCircle, PlusCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext'; 

const Layout = ({ children }) => {
  const location = useLocation();
  const { user, login, logout } = useAuth();
  
  const navigation = user
    ? [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Events', href: '/events', icon: Calendar },
        { name: 'Profile', href: '/profile', icon: UserCircle },
        { name: 'Create Event', href: '/create-event', icon: PlusCircle },
      ]
    : [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Events', href: '/events', icon: Calendar }
      ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold">Event Platform</h1>
              </div>
              <nav className="hidden md:ml-6 md:flex space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                      location.pathname === item.href
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Link>
                ))}
              </nav></div>
              <div className="flex items-center">
                {!user && (
                    <>
                    {/* Register button */}
                    <Link to="/register">
                        <button className="px-4 py-2 bg-green-500 text-white rounded">
                        Register
                        </button>
                    </Link>
                    </>
                )}
                <button onClick={user ? logout : login} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">
                    {user ? 'Logout' : 'Login'}
                </button> 
            </div>
          </div>
        </div>
      </header>

      <main className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;