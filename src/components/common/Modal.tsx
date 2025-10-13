import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, Star, Users, Clock, Shield } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            
            {/* Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface ServiceModalProps {
  service: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    features: string[];
    benefit: string;
    color: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Resultados Garantizados',
      description: 'Metodología probada con más de 500 proyectos exitosos'
    },
    {
      icon: Clock,
      title: 'Entrega Rápida',
      description: 'Desarrollo ágil con entregas incrementales cada 2 semanas'
    },
    {
      icon: Shield,
      title: 'Calidad Premium',
      description: 'Testing automatizado y code reviews en cada línea de código'
    },
    {
      icon: Users,
      title: 'Equipo Dedicado',
      description: 'Desarrolladores senior asignados exclusivamente a tu proyecto'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Análisis', description: 'Evaluamos tus necesidades y objetivos' },
    { step: '02', title: 'Diseño', description: 'Creamos la arquitectura y mockups' },
    { step: '03', title: 'Desarrollo', description: 'Construimos con metodologías ágiles' },
    { step: '04', title: 'Lanzamiento', description: 'Desplegamos y optimizamos' }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mr-6`}>
            <service.icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {service.title}
            </h2>
            <p className="text-lg text-neura-primary dark:text-neura-accent font-semibold">
              {service.benefit}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                ¿Qué Incluye?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Características Principales
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Nuestro Proceso
              </h3>
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 bg-neura-primary dark:bg-neura-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Benefits */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                ¿Por Qué Elegir Neura?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <benefit.icon className="w-6 h-6 text-neura-primary dark:text-neura-accent mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Resultados Comprobados
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neura-primary dark:text-neura-accent">
                    98%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Satisfacción
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neura-primary dark:text-neura-accent">
                    500+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Proyectos
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neura-primary dark:text-neura-accent">
                    4.5
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Meses promedio
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neura-primary dark:text-neura-accent">
                    300%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    ROI promedio
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <motion.button
                className="w-full bg-gradient-to-r from-neura-primary to-neura-secondary hover:from-neura-dark hover:to-neura-primary text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onClose();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Star className="w-5 h-5 mr-2" />
                Solicitar Consulta Gratuita
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};