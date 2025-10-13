import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Shield, 
  Zap, 
  Target,
  CheckCircle,
  TrendingUp,
  Globe,
  Star,
  Building,
  Briefcase
} from 'lucide-react';
import AnimatedSection from './common/AnimatedSection';
import { useCountUp } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref: countRef1, count: projectsCount } = useCountUp(500);
  const { ref: countRef2, count: clientsCount } = useCountUp(200);
  const { ref: countRef3, count: experienceCount } = useCountUp(8);
  const { ref: countRef4, count: satisfactionCount } = useCountUp(98);

  const values = [
    {
      icon: Target,
      title: 'Resultados Medibles',
      description: 'Cada proyecto tiene KPIs claros y métricas de éxito definidas desde el día uno.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Innovación Constante',
      description: 'Utilizamos las tecnologías más avanzadas para mantener a nuestros clientes en la vanguardia.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Confianza Total',
      description: 'Transparencia, comunicación abierta y cumplimiento de compromisos en cada proyecto.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Experiencia Humana',
      description: 'Combinamos la potencia de la tecnología con el toque humano que marca la diferencia.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Certificaciones Internacionales',
      items: ['ISO 27001 - Seguridad de la Información', 'AWS Advanced Partner', 'Microsoft Gold Partner', 'Google Cloud Certified']
    },
    {
      icon: Building,
      title: 'Sectores de Impacto',
      items: ['E-commerce & Retail', 'Servicios Financieros', 'Healthcare & Biotech', 'Manufactura & Logística']
    },
    {
      icon: Briefcase,
      title: 'Metodologías Probadas',
      items: ['Desarrollo Ágil (Scrum)', 'DevOps & CI/CD', 'Arquitectura Modular', 'Testing Automatizado']
    },
    {
      icon: Globe,
      title: 'Alcance Global',
      items: ['Clientes en 15+ países', 'Soporte 24/7 multidioma', 'Equipos distribuidos', 'Compliance internacional']
    }
  ];

  const timeline = [
    {
      year: '2016',
      title: 'Fundación',
      description: 'Iniciamos con la visión de democratizar la tecnología empresarial'
    },
    {
      year: '2018',
      title: 'Primer Millón',
      description: 'Alcanzamos $1M en facturación con 50+ proyectos exitosos'
    },
    {
      year: '2020',
      title: 'Expansión Internacional',
      description: 'Abrimos operaciones en 5 países de Latinoamérica'
    },
    {
      year: '2022',
      title: 'Reconocimiento Global',
      description: 'Premio "Tech Company of the Year" por innovación en SaaS'
    },
    {
      year: '2024',
      title: 'Líderes del Mercado',
      description: 'Top 3 en desarrollo de software empresarial en la región'
    }
  ];

  return (
    <section id="about" className="section bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="section-header">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-neura-accent/10 border border-neura-accent/20 text-neura-primary text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 mr-2" />
            Líderes en transformación digital
          </motion.div>
          <h2 className="section-title">
            Más que Desarrolladores, <span className="gradient-text">Socios Estratégicos</span>
          </h2>
          <p className="section-subtitle">
            Durante 8 años hemos transformado la manera en que las empresas operan, 
            combinando expertise técnico con visión estratégica para generar resultados extraordinarios.
          </p>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection className="mb-20">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-neura">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <motion.div
                ref={countRef1}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {projectsCount}+
                </div>
                <div className="text-gray-600 font-medium">Proyectos Entregados</div>
              </motion.div>
              
              <motion.div
                ref={countRef2}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {clientsCount}+
                </div>
                <div className="text-gray-600 font-medium">Clientes Satisfechos</div>
              </motion.div>
              
              <motion.div
                ref={countRef3}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {experienceCount}
                </div>
                <div className="text-gray-600 font-medium">Años de Experiencia</div>
              </motion.div>
              
              <motion.div
                ref={countRef4}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {satisfactionCount}%
                </div>
                <div className="text-gray-600 font-medium">Satisfacción Cliente</div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Values Section */}
        <AnimatedSection className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nuestros <span className="gradient-text">Valores</span> en Acción
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada decisión que tomamos está guiada por principios que han demostrado 
              generar valor real para nuestros clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedSection
                key={value.title}
                direction="up"
                delay={index * 0.1}
              >
                <motion.div
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-neura transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Achievements Section */}
        <AnimatedSection className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Reconocimiento y <span className="gradient-text">Expertise</span>
            </h3>
            <p className="text-xl text-gray-600">
              Nuestros logros respaldan nuestra capacidad de entregar resultados excepcionales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <AnimatedSection
                key={achievement.title}
                direction="up"
                delay={index * 0.1}
              >
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg h-full">
                  <div className="flex items-center mb-4">
                    <achievement.icon className="w-8 h-8 text-neura-primary mr-3" />
                    <h4 className="font-bold text-gray-900 dark:text-white">{achievement.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {achievement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Timeline Section */}
        <AnimatedSection>
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-neura">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Nuestro <span className="gradient-text">Crecimiento</span> Constante
              </h3>
              <p className="text-xl text-gray-600">
                Una década construyendo el futuro digital, un proyecto a la vez
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-neura-primary to-neura-accent rounded-full hidden lg:block"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <div className="text-2xl font-bold text-neura-primary mb-2">{item.year}</div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="hidden lg:flex lg:w-2/12 justify-center">
                      <div className="w-4 h-4 bg-neura-primary rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    
                    <div className="lg:w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="text-center mt-20">
          <div className="bg-neura-gradient rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿Listo para Formar Parte de Nuestra Historia?
            </h3>
            <p className="text-xl text-neura-light mb-8 max-w-2xl mx-auto">
              Cada cliente que confía en nosotros se convierte en un capítulo más de nuestra historia de éxito. 
              Tu proyecto podría ser el próximo hito que celebremos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-neura-primary rounded-xl font-bold text-lg hover:bg-neura-light hover:text-neura-dark transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Escribe Tu Historia de Éxito
              </motion.a>
              <motion.a
                href="#team"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-bold text-lg hover:bg-white hover:text-neura-primary transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="w-5 h-5 mr-2" />
                Conoce al Equipo
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;