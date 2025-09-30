import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600';
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-orange-600 p-2 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Karang Taruna</h1>
              <p className="text-sm text-gray-600">RW 05 Kelurahan Sejahtera</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition-colors ${isActive('/')}`}>
              Beranda
            </Link>
            <Link to="/berita" className={`font-medium transition-colors ${isActive('/berita')}`}>
              Berita
            </Link>
            <Link to="/kontak" className={`font-medium transition-colors ${isActive('/kontak')}`}>
              Kontak
            </Link>
            <Link 
              to="/admin" 
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium"
            >
              Admin
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium transition-colors ${isActive('/')}`}
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                to="/berita" 
                className={`font-medium transition-colors ${isActive('/berita')}`}
                onClick={() => setIsOpen(false)}
              >
                Berita
              </Link>
              <Link 
                to="/kontak" 
                className={`font-medium transition-colors ${isActive('/kontak')}`}
                onClick={() => setIsOpen(false)}
              >
                Kontak
              </Link>
              <Link 
                to="/admin" 
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium inline-block w-fit"
                onClick={() => setIsOpen(false)}
              >
                Admin
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;