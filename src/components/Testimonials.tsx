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
    <section id="testimonials" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-wide text-indigo-600 uppercase">Testimonios</h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Nuestros Clientes dicen 
          </p>
          <p className="max-w-2xl mt-4 text-2xl text-gray-800 dark:text-gray-300 lg:mx-auto">
            Conozca lo que nuestros clientes dicen sobre nuestros servicios y cómo hemos ayudado a sus empresas a crecer y prosperar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="p-8">
                <div className="flex items-center mb-4" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <meta itemProp="ratingValue" content={String(testimonial.rating)} />
                  <meta itemProp="bestRating" content="5" />
                </div>
                <p className="mb-6 italic font-bold text-gray-600 dark:text-gray-300" itemProp="reviewBody">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <img
                    className="object-cover w-12 h-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.author}
                    itemProp="image"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white" itemProp="name">{testimonial.author}</h4>
                    <p className="font-bold text-gray-600 dark:text-gray-300" itemProp="jobTitle">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 text-xl font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
          >
            Convierte tu idea en realidad con Neura 
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;