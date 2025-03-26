import React, { useState, useEffect } from 'react';
import { BeakerIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // State to track the scroll position
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to check if the page has been scrolled
    const handleScroll = () => {
      if (window.scrollY > 10) {  // Adjust the scroll threshold as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-white/70' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <BeakerIcon className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Anorganické názvosloví
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/periodic-table">Periodická tabulka</NavLink>
            <NavLink to="/guide">Průvodce</NavLink>
            <NavLink to="/tests">Procvičování</NavLink>
            <NavLink to="/compounds">Sloučeniny</NavLink>
            <NavLink to="/about">O projektu</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="px-4 py-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 text-sm font-medium"
    >
      {children}
    </Link>
  );
}
