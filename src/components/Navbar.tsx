import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full z-50 bg-blue-1000/10 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div
            onClick={() => navigate('/')}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src="/logo-3.svg" alt="Navio" className="h-6" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/*<a
              href="#"
              onClick={() => navigate('/features')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              onClick={() => navigate('/technology')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Technology
            </a>*/}
            <a
              href="#"
              onClick={() => navigate('/docs')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Docs
            </a>
            <a
              href="#"
              onClick={() => navigate('/about')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              {/*<a
                href="#"
                onClick={() => navigate('/features')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                onClick={() => navigate('/technology')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Technology
              </a>*/}
              <a
                href="#"
                onClick={() => navigate('/docs')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Docs
              </a>
              <a
                href="#"
                onClick={() => navigate('/about')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
