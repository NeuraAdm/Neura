import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Neura me ha ofrecido un proyecto de software a medida que ha superado mis expectativas. Su equipo de expertos ha sido muy profesional y atento en todo momento.",
    author: "Yeraldin Gomez",
    position: "CEO, Gestus Soluciones Integrales.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    rating: 5,
  },
  {
    content: "Neura me ha ofrecido un proyecto de software a medida que ha superado mis expectativas. Su equipo de expertos ha sido muy profesional y atento en todo momento.",
    author: "Yeraldin Gomez",
    position: "CEO, Gestus Soluciones Integrales.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    rating: 5,
  },
  {
    content: "Neura me ha ofrecido un proyecto de software a medida que ha superado mis expectativas. Su equipo de expertos ha sido muy profesional y atento en todo momento.",
    author: "Yeraldin Gomez",
    position: "CEO, Gestus Soluciones Integrales.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonios</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nuestros Clientes dicen 
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Conozca lo que nuestros clientes dicen sobre nuestros servicios y cómo hemos ayudado a sus empresas a crecer y prosperar.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Convierte tu idea en realidad con Neura 
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;