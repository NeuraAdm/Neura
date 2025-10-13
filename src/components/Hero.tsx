import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Users, TrendingUp } from 'lucide-react';
import AnimatedSection from './common/AnimatedSection';

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { number: '25+', label: 'Proyectos Exitosos', icon: CheckCircle },
    { number: '98%', label: 'Satisfacción Cliente', icon: Users },
    { number: '150%', label: 'ROI Promedio', icon: TrendingUp },
    { number: '24h', label: 'Tiempo Respuesta', icon: Zap },
  ];

  // const trustBadges = [
  //   'Certificación ISO 27001',
  //   'Partner Microsoft',
  //   'AWS Select Partner',
  //   'Google Cloud Partner'
  // ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section className="relative flex items-center min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-neura-light/10 dark:from-gray-900 dark:via-gray-800 dark:to-neura-primary/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30 dark:opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute w-20 h-20 rounded-full top-20 left-10 bg-neura-gradient blur-xl opacity-20 dark:opacity-30 animate-float"></div>
      <div className="absolute w-32 h-32 rounded-full top-40 right-20 bg-gradient-to-r from-neura-secondary to-neura-accent blur-2xl opacity-15 dark:opacity-25 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute w-16 h-16 rounded-full opacity-25 dark:opacity-35 bottom-20 left-1/4 bg-neura-primary blur-lg animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <AnimatedSection direction="down" className="inline-flex">
              <div className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-full bg-neura-light/20 dark:bg-neura-primary/10 border-neura-primary/20 dark:border-neura-accent/30 text-neura-dark dark:text-neura-accent">
                <CheckCircle className="w-4 h-4 mr-2 text-neura-primary dark:text-neura-accent" />
                Empresa líder en transformación digital
              </div>
            </AnimatedSection>

            {/* Main Headline */}
            <AnimatedSection direction="up" delay={0.2}>
              <h1 className="text-5xl font-bold leading-tight lg:text-7xl font-display">
                <span className="block text-gray-900 dark:text-white">Transforma Tu</span>
                <span className="block gradient-text">Negocio Digital</span>
                <span className="block text-gray-900 dark:text-white">Hoy Mismo</span>
              </h1>
            </AnimatedSection>

            {/* Subtitle */}
            <AnimatedSection direction="up" delay={0.4}>
              <p className="max-w-2xl text-xl leading-relaxed text-gray-600 dark:text-gray-300 lg:text-2xl">
                Desarrollamos <strong className="text-neura-primary dark:text-neura-accent">soluciones SaaS personalizadas</strong> y 
                aplicaciones web que <strong className="text-neura-primary dark:text-neura-accent">incrementan tus ventas hasta un 300%</strong> 
                y automatizan procesos críticos para tu empresa.
              </p>
            </AnimatedSection>

            {/* Value Propositions */}
            <AnimatedSection direction="up" delay={0.6}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  'Desarrollo en tiempo récord',
                  'ROI garantizado en 3 meses',
                  'Soporte 24/7 incluido',
                  'Escalabilidad ilimitada'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="flex-shrink-0 w-5 h-5 text-neura-primary dark:text-neura-accent" />
                    <span className="font-medium text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Trust Badges
            <AnimatedSection direction="up" delay={1.0}>
              <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-200 dark:border-gray-700">
                {trustBadges.map((badge, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm text-gray-600 bg-white border border-gray-200 rounded-full shadow-sm dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </AnimatedSection> */}
          </div>

          {/* Right Content - Stats & Visual */}
          <div className="space-y-8">
            {/* Animated Stats Card */}
            <AnimatedSection direction="right" delay={0.4}>
              <div className="relative">
                <motion.div
                  className="p-8 border card bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-neura-primary/20 dark:border-neura-accent/30"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-center">
                    <motion.div
                      key={currentStat}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      {React.createElement(stats[currentStat].icon, { 
                        className: "w-12 h-12 text-neura-primary dark:text-neura-accent mx-auto mb-4" 
                      })}
                      <div className="mb-2 text-4xl font-bold gradient-text">
                        {stats[currentStat].number}
                      </div>
                      <div className="font-medium text-gray-600 dark:text-gray-300">
                        {stats[currentStat].label}
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Progress Indicators */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {stats.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index === currentStat ? 'bg-neura-primary dark:bg-neura-accent' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex justify-center w-6 h-10 border-2 rounded-full border-neura-primary">
          <div className="w-1 h-3 mt-2 rounded-full bg-neura-primary"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;