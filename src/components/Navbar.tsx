import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="w-6 h-6 text-green-600" />
          <span className="text-xl font-bold text-gray-800">EcoAware</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;