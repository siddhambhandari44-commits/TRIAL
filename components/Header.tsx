import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm p-4 md:px-8 lg:px-12 flex justify-between items-center transition-all duration-300 ease-in-out">
      <div className="flex items-center space-x-2">
        <svg
          className="h-8 w-8 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.002 2.002A3.001 3.001 0 0118 8v0h.01M16 16.5l2.002 2.002A3.001 3.001 0 0121 20v0h.01M5 12h.01M12 5h.01M12 19h.01M19 12h.01M12 12h.01"
          ></path>
        </svg>
        <span className="text-2xl font-bold text-gray-900">EliteSite</span>
      </div>
      <nav className="hidden md:flex space-x-8">
        <a href="#features" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-300">Features</a>
        <a href="#about" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-300">About</a>
        <a href="#contact" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-300">Contact</a>
      </nav>
      <button className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <svg
          className="h-6 w-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </header>
  );
};
