import React from 'react';
import { BarChart3, Users, Clock, ShieldCheck, LineChart, Layers } from 'lucide-react';

const products = [
  {
    name: 'Primora',
    description: 'Software de Gestion Documental y Administrativa para empresas y organizaciones. Desarrolla con control y seguridad tus documentos, procesos y colaboradores.',
    features: ['Registro y Control de tus trabajadores y colaboradores', 'Visualizacion Organizada', 'Control de Formatos', 'Gestions de Procesos y Herramientas'],
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    color: 'bg-violet-600',
  },
  {
    name: 'Primora',
    description: 'Software de Gestion Documental y Administrativa para empresas y organizaciones. Desarrolla con control y seguridad tus documentos, procesos y colaboradores.',
    features: ['Registro y Control de tus trabajadores y colaboradores', 'Visualizacion Organizada', 'Control de Formatos', 'Gestions de Procesos y Herramientas'],
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    color: 'bg-violet-600',
  },
  {
    name: 'Primora',
    description: 'Software de Gestion Documental y Administrativa para empresas y organizaciones. Desarrolla con control y seguridad tus documentos, procesos y colaboradores.',
    features: ['Registro y Control de tus trabajadores y colaboradores', 'Visualizacion Organizada', 'Control de Formatos', 'Gestions de Procesos y Herramientas'],
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    color: 'bg-violet-600',
  },
];

const Products = () => {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Productos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nuestros modulos de software especializados.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Conozca más sobre nuestros productos y cómo pueden ayudar a su empresa a crecer y prosperar.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product, index) => (
            <div key={index} className="group relative">
              <div className="w-full min-h-80 bg-white rounded-lg overflow-hidden shadow-lg">
                <div className={`${product.color} p-6`}>
                  <div className="flex items-center">
                    {product.icon}
                    <h3 className="ml-3 text-xl font-bold text-white">{product.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-base text-gray-700 mb-4">{product.description}</p>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Caracteristicas:</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-500">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="mb-1">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <a
                  href="#contact"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Conoce mas de {product.name} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;