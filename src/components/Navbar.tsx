import React, { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="../../images/logo.png" alt="Logo Neura" />
              <span className="ml-2 text-2xl font-bold text-white">Neura</span>
            </div>
            <div className="hidden md:ml-14 md:flex md:space-x-8">
              <a href="#services" className="inline-flex items-center text-lg font-medium text-white hover:text-indigo-600 hover:border-indigo-600">
                Servicios
              </a>
              <a href="#products" className="inline-flex items-center text-lg  font-medium text-white hover:text-indigo-600 hover:border-indigo-600">
                Productos
              </a>
              <a href="#about" className="inline-flex items-center text-lg   font-medium text-white hover:text-indigo-600 hover:border-indigo-600">
                Acerca De
              </a>
              <a href="#team" className="inline-flex items-center text-lg  font-medium text-white hover:text-indigo-600 hover:border-indigo-600">
                Equipo
              </a>
              <a href="#testimonials" className="inline-flex items-center text-lg  font-medium text-white hover:text-indigo-600 hover:border-indigo-600">
                Testimonios
              </a>
              <a href="#contact" className="inline-flex items-center text-lg   font-medium text-white hover:text-indigo-600 hover:border-indigo-600">
                Contacto
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-indigo-700"
            >
              Inicia Ahora
            </a>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#services"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#products"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Productos
            </a>
            <a
              href="#about"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Acerca De
            </a>
            <a
              href="#team"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Equipo de Trabajo
            </a>
            <a
              href="#testimonials"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Testimonios
            </a>
            <a
              href="#contact"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
            <div className="mt-4 pl-3 pr-4">
              <a
                href="#contact"
                className="block text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={() => setIsOpen(false)}
              >
                Inicia Ahora
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
