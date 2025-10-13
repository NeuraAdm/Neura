import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Lightbulb } from 'lucide-react';
import ceoImage from '../images/Juan.jpg';

const About = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Enfoque en Innovación",
      description: "Nuestro equipo ataca los desafíos más complejos con soluciones creativas y eficientes."
    },
    {
      icon: Users,
      title: "Nuestra prioridad eres tú",
      description: "Nos enfocamos en ofrecerte un servicio personalizado y de calidad."
    },
    {
      icon: Award,
      title: "Calidad Asegurada",
      description: "Nuestros rigurosos procesos de control de calidad garantizan que obtengas el mejor producto."
    },
    {
      icon: Lightbulb,
      title: "Soluciones Creativas",
      description: "Desarrollamos ideas innovadoras que transforman la manera de hacer negocios."
    }
  ];

  return (
    <section id="about" className="py-20 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-sm font-semibold tracking-wide uppercase text-neura-primary dark:text-neura-accent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Acerca de Nosotros
            </motion.h2>
            <motion.p 
              className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Transformamos tus ideas en{' '}
              <span className="text-transparent bg-gradient-to-r from-neura-primary to-neura-secondary bg-clip-text">
                soluciones digitales
              </span>{' '}
              innovadoras
            </motion.p>
            <motion.p 
              className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Fundada en 2024, Neura ofrece un servicio personalizado para empresas. Nuestro equipo de expertos 
              trabajan para ofrecer soluciones digitales de vanguardia que impulsan el crecimiento y la eficiencia 
              de tu negocio.
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-neura-primary/10 dark:bg-neura-accent/10 rounded-xl">
                      <feature.icon className="w-6 h-6 text-neura-primary dark:text-neura-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

            {/* CEO Section */}
            <motion.div
            className="mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            <div className="relative">
              {/* CEO Image */}
              <motion.div
              className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              >
              <div className="absolute inset-0 transform bg-gradient-to-tr from-neura-primary to-neura-secondary rounded-3xl rotate-6"></div>
              <div className="relative overflow-hidden bg-white shadow-2xl dark:bg-gray-800 rounded-3xl">
                <img
                src={ceoImage}
                alt="Juan - CEO de Neura"
                className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              </motion.div>

              {/* CEO Info Card */}
              <motion.div
              className="absolute max-w-sm p-6 -translate-y-12 bg-white border border-gray-200 shadow-xl -right-6 dark:bg-gray-800 rounded-2xl dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              >
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-neura-primary to-neura-secondary">
                <span className="text-lg font-bold text-white">J</span>
                </div>
                <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Juan</h4>
                <p className="text-sm font-medium text-neura-primary dark:text-neura-accent">CEO & Fundador</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                "Nuestra misión es democratizar la tecnología y hacer que cada empresa, 
                sin importar su tamaño, pueda competir en la era digital."
              </p>
              </motion.div>
            </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;