import React from 'react';
import { Code, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-teal-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="border-t-4 border-gray-900 xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 mt-5 mxl:col-span-1">
            <div className="flex items-center">
              <img className="h-8 w-auto" src="../../images/logo.png" alt="Logo Neura" />
              <span className="ml-3 text-2xl font-bold text-white">Neura</span>
            </div>
            <p className="text-lg font-medium text-white">
            Soluciones Innovadoras, Transformacion Digital
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Yotube</span>
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="mt-4 md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-200 tracking-wider uppercase">Soluciones</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#services" className="text-lg font-medium text-white hover:text-white">
                      Software Personalizado
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-lg font-medium text-white hover:text-white">
                      Aplicaciones Web
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-lg font-medium text-white hover:text-white">
                      Plataformas SaaS 
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-lg font-medium text-white hover:text-white">
                      Consultoria IT
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-4 md:mt-0">
                <h3 className="text-lg font-semibold text-gray-200 tracking-wider uppercase">Productos</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#products" className="text-lg font-medium text-white hover:text-white">
                      Primora
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-200 tracking-wider uppercase">Compañia</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#about" className="text-lg font-medium text-white hover:text-white">
                      Acerca De
                    </a>
                  </li>
                  <li>
                    <a href="#team" className="text-lg font-medium text-white hover:text-white">
                      Equipo
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-lg font-semibold text-gray-200 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-lg font-medium text-white hover:text-white">
                      Politica de Privacidad
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg font-medium text-white hover:text-white">
                      Terminos y Condiciones
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg font-medium text-white hover:text-white">
                      Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t-4 border-gray-900 pt-4">
          <p className="text-base text-gray-200 font-bold xl:text-center">
            &copy; {new Date().getFullYear()} Neura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
