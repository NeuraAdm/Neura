import React from 'react';
import {Smartphone, Globe, Server, Shield } from 'lucide-react';

const services = [
  {
    title: 'Desarrollo de aplicaciones SaaS personalizadas',
    description: 'Crear aplicaciones SaaS personalizadas para clientes que satisfagan sus necesidades específicas.',
    icon: <Shield className="h-8 w-8 text-indigo-800" />,
  },
  {
    title: 'Desarrollo de software a medida',
    description: 'Ofrecer servicios de desarrollo de software personalizado para empresas de todos los tamaños, incluyendo el desarrollo web.',
    icon: <Smartphone className="h-8 w-8 text-indigo-800" />,
  },
  {
    title: 'Gestión de proyectos de software',
    description: 'Ofrecer servicios de gestión de proyectos de software para ayudar a las empresas a gestionar con éxito sus proyectos de desarrollo de software.',
    icon: <Globe className="h-8 w-8 text-indigo-800" />,
  },
  {
    title: 'Consultoría de software',
    description: 'Proporcionar servicios de consultoría de software para ayudar a las empresas a mejorar sus procesos de desarrollo de software y adoptar nuevas tecnologías.',
    icon: <Server className="h-8 w-8 text-indigo-800" />,
  },
  {
    title: 'Creacion de Paginas Web',
    description: 'Ofrecemos servicios de diseño y desarrollo de sitios web para ayudarte a crear una presencia en línea efectiva y atractiva.',
    icon: <Server className="h-8 w-8 text-indigo-800" />,
  },
  {
    title: 'Servicios Adicionales',
    description: 'Ofrecemos servicios adicionales como: Integración de Software, Migración de Softwares, Capacitación en Software, Implementación de software, Mantenimiento y Soporte de Software y mas.',
    icon: <Server className="h-8 w-8 text-indigo-800" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl text-blue-900 font-bold tracking-wide uppercase">Servicios</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Soluciones Tecnologicas a tu medida. 
          </p>
          <p className="mt-4 max-w-2xl text-2xl text-gray-600 lg:mx-auto">
            Ofrecemos una amplia gama de servicios de desarrollo de software y soluciones tecnológicas para ayudarte a alcanzar tus objetivos empresariales.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg h-full border">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.title}</h3>
                    <p className="mt-5 text-base text-gray-700 font-bold">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;