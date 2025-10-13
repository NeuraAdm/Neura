import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  DollarSign,
  Clock,
  Shield,
  Award
} from 'lucide-react';
import AnimatedSection from './common/AnimatedSection';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      content: "Neura transformó completamente nuestro e-commerce. En solo 6 meses aumentamos nuestras ventas online en un 340% y reducimos los costos operativos en 45%. Su equipo no solo entregó código, sino una solución estratégica completa.",
      author: "María Elena Rodríguez",
      position: "CEO & Founder",
      company: "TechStore Premium",
      industry: "E-commerce",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 5,
      results: {
        sales: "+340%",
        time: "6 meses",
        roi: "450%"
      },
      featured: true
    },
    {
      content: "La plataforma CRM que desarrollaron ha revolucionado nuestro proceso de ventas. Nuestro equipo ahora gestiona 3x más leads con la misma cantidad de personal. El ROI fue visible desde el primer mes.",
      author: "Carlos Mendoza",
      position: "VP de Ventas",
      company: "SalesForce Latino",
      industry: "Servicios B2B",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 5,
      results: {
        efficiency: "+300%",
        time: "4 meses",
        roi: "280%"
      }
    },
    {
      content: "El sistema de gestión documental que crearon no solo nos ahorró 40 horas semanales, sino que mejoró nuestra compliance al 100%. La inversión se pagó sola en 3 meses.",
      author: "Ana Patricia Silva",
      position: "Directora de Operaciones",
      company: "LegalTech Partners",
      industry: "Servicios Legales",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 5,
      results: {
        time: "40h/semana",
        compliance: "100%",
        roi: "350%"
      }
    },
    {
      content: "Neura desarrolló nuestra plataforma de Business Intelligence y ahora tomamos decisiones 5x más rápido con datos en tiempo real. Nuestro crecimiento se aceleró exponencialmente.",
      author: "Roberto Chen",
      position: "CTO",
      company: "DataCorp Solutions",
      industry: "Consultoría",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 5,
      results: {
        decisions: "5x más rápidas",
        accuracy: "95%",
        growth: "+180%"
      }
    },
    {
      content: "La automatización de procesos que implementaron liberó a nuestro equipo de tareas repetitivas. Ahora nos enfocamos en estrategia mientras el sistema hace el trabajo pesado.",
      author: "Laura Fernández",
      position: "Gerente General",
      company: "OptiFlow Industries",
      industry: "Manufactura",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 5,
      results: {
        automation: "90%",
        efficiency: "+220%",
        costs: "-35%"
      }
    },
    {
      content: "Su plataforma de gestión de RRHH mejoró la satisfacción de nuestros empleados al 94% y redujo el tiempo de procesos administrativos en 70%. Una inversión que valió cada centavo.",
      author: "Diego Morales",
      position: "Director de RRHH",
      company: "TalentHub Corp",
      industry: "Recursos Humanos",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 5,
      results: {
        satisfaction: "94%",
        time: "-70%",
        retention: "+35%"
      }
    }
  ];

  const metrics = [
    { icon: TrendingUp, label: "Crecimiento Promedio", value: "200%" },
    { icon: DollarSign, label: "ROI Promedio", value: "150%" },
    { icon: Clock, label: "Tiempo de Entrega", value: "4.5 meses" },
    { icon: Shield, label: "Satisfacción Cliente", value: "98%" }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section bg-gray-50 dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="section-header">
          <motion.div
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-yellow-700 bg-yellow-100 border border-yellow-200 rounded-full dark:bg-yellow-900 dark:border-yellow-700 dark:text-yellow-300"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-4 h-4 mr-2" />
            Resultados que hablan por sí solos
          </motion.div>
          <h2 className="section-title">
            Lo que Dicen Nuestros <span className="gradient-text">Clientes</span>
          </h2>
          <p className="section-subtitle">
            Cada testimonio representa una historia de transformación real. 
            Descubre cómo hemos ayudado a empresas como la tuya a alcanzar resultados extraordinarios.
          </p>
        </AnimatedSection>

        {/* Success Metrics */}
        <AnimatedSection className="mb-20">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-neura-gradient rounded-2xl shadow-neura">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">{metric.value}</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Featured Testimonial */}
        <AnimatedSection className="mb-20">
          <div className="relative p-8 overflow-hidden bg-white border border-gray-200 lg:p-12 dark:bg-gray-800 rounded-3xl shadow-neura dark:border-gray-700">
            {/* Background Quote Icon */}
            <Quote className="absolute w-16 h-16 top-8 right-8 text-neura-primary/10 dark:text-neura-accent/10" />
            
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="grid items-center gap-8 lg:grid-cols-3"
                >
                  {/* Testimonial Content */}
                  <div className="lg:col-span-2">
                    {/* Stars */}
                    <div className="flex items-center mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="mb-8 text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300 lg:text-2xl">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                    
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {Object.entries(testimonials[currentIndex].results).map(([key, value], index) => (
                        <div key={index} className="p-4 text-center border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                          <div className="text-2xl font-bold text-neura-primary dark:text-neura-accent">{value}</div>
                          <div className="text-xs text-gray-600 capitalize dark:text-gray-400">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="text-center lg:text-left">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      className="object-cover w-24 h-24 mx-auto mb-4 shadow-lg rounded-2xl lg:mx-0 ring-4 ring-white dark:ring-gray-700"
                    />
                    <div>
                      <h4 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                        {testimonials[currentIndex].company}
                      </p>
                      <span className="inline-block px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 rounded-full dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600">
                        {testimonials[currentIndex].industry}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentIndex ? 'bg-neura-primary dark:bg-neura-accent' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <motion.button
                    onClick={prevTestimonial}
                    className="p-2 text-gray-600 transition-colors duration-200 bg-gray-100 border border-gray-200 rounded-lg dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 hover:bg-neura-primary dark:hover:bg-neura-accent hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    onClick={nextTestimonial}
                    className="p-2 text-gray-600 transition-colors duration-200 bg-gray-100 border border-gray-200 rounded-lg dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 hover:bg-neura-primary dark:hover:bg-neura-accent hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;