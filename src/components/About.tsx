import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-1 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Acerca de Nosotros</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Transformamos tus ideas en soluciones digitales innovadoras para tu negocio.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Fundada en 2024, Neura ofrece un servicio personalizado para empresas. Nuestro equipo de expertos trabajan para ofrecer soluciones digitales de vanguardia que impulsan el crecimiento y la eficiencia de tu negocio. 
            </p>
            <div className="mt-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Enfoque en Innovación</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Nuestro equipo ataca los desafíos más complejos con soluciones creativas y eficientes.
                  </p>
                </div>
              </div>
              <div className="flex mt-6">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Nuestra prioridad eres tú</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Nos enfocamos en ofrecerte un servicio personalizado y de calidad.
                  </p>
                </div>
              </div>
              <div className="flex mt-6">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Calidad Asegurada</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Nuestros rigurosos procesos de control de calidad garantizan que obtengas el mejor producto.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Team collaboration"
              />
            </div>
          </div>
        </div> 
      </div>

      <div className="mt-16 bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-1 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Nuestros Valores</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Compromiso, Innovación y Excelencia.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                En Neura, nos guiamos por nuestros valores fundamentales que nos impulsan a ofrecer soluciones de alta calidad y a mantener relaciones duraderas con nuestros clientes.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Compromiso</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Nos comprometemos a entender y satisfacer las necesidades de nuestros clientes.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Innovación</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Buscamos constantemente nuevas formas de mejorar y ofrecer soluciones innovadoras.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Excelencia</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Nos esforzamos por alcanzar la excelencia en todo lo que hacemos.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                  alt="Team collaboration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;