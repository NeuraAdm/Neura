import { motion } from 'framer-motion';
import { 
  Search, 
  Lightbulb, 
  Code, 
  Rocket,
  CheckCircle,
  Users,
  Calendar,
  Shield,
  Zap,
  Target,
  TrendingUp,
  Award
} from 'lucide-react';
import AnimatedSection from './common/AnimatedSection';

const Process = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Análisis Estratégico',
      description: 'Evaluación exhaustiva de tu negocio, objetivos y desafíos actuales',
      icon: Search,
      deliverables: [
        'Auditoría tecnológica completa',
        'Análisis de puntos de dolor',
        'Identificación de oportunidades',
        'Definición de KPIs'
      ],
      tools: ['Business Analysis', 'Market Research', 'Technical Audit'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      title: 'Diseño & Arquitectura',
      description: 'Implementacion de soluciones innovadoras con un enfoque centrado en el usuario y escalabilidad',
      icon: Lightbulb,
      deliverables: [
        'Arquitectura robusta y escalable',
        'Prototipado de alta fidelidad',
        'Plan de implementación detallado',
        'Mediciones y análisis de usabilidad'
      ],
      tools: ['System Design', 'Schema Design', 'Prototyping'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      number: '03',
      title: 'Desarrollo Efectivo',
      description: 'Construcción iterativa de soluciones y enfoque en la calidad',
      icon: Code,
      deliverables: [
        'Estrategias de desarrollo iterativo',
        'Documentación de procesos',
        'Pruebas con usuarios reales',
        'Pre-entrega y ajustes finales'
      ],
      tools: ['Agile/Scrum', 'CI/CD', 'Automated Testing'],
      color: 'from-green-500 to-green-600'
    },
    {
      number: '04',
      title: 'Lanzamiento & Optimización',
      description: 'Implementación de la solución con monitoreo continuo',
      icon: Rocket,
      deliverables: [
        'Despliegue en entorno real',
        'Capacitación sobre el uso y mantenimiento',
        'Monitoreo y métricas',
        'Soporte continuo y optimización post-lanzamiento'
      ],
      tools: ['Deployment', 'Monitoring', 'Training'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const methodology = [
    {
      icon: Users,
      title: 'Equipos Dedicados',
      description: 'Un equipo especializado que se integra como parte de tu empresa'
    },
    {
      icon: Calendar,
      title: 'Entregas Efectivas',
      description: 'Demostraciones que muestran avances tangibles'
    },
    {
      icon: Shield,
      title: 'Calidad Garantizada',
      description: 'Procesos de control de calidad rigurosos para asegurar resultados excepcionales'
    },
    {
      icon: Zap,
      title: 'Comunicacion Ágil',
      description: 'Comunicación directa y resolución de dudas'
    }
  ];

  const guarantees = [
    {
      icon: Target,
      title: 'Resultados Garantizados',
      description: 'Cumplimiento de requerimientos planteados'
    },
    {
      icon: TrendingUp,
      title: 'Entregas de Valor',
      description: 'Garantizamos entregas que impulsan tu negocio hacia adelante'
    },
    {
      icon: Award,
      title: 'Satisfacción Total',
      description: '95% de satisfacción cliente respaldada'
    }
  ];

  return (
    <section id="process" className="bg-white section dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="section-header">
          <motion.div
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium border rounded-full bg-neura-accent/10 border-neura-accent/20 text-neura-primary"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 mr-2" />
            Metodología probada en proyectos
          </motion.div>
          <h2 className="section-title">
            Nuestro Proceso <span className="gradient-text">Garantizado</span>
          </h2>
          <p className="section-subtitle">
            Una metodología refinada durante 2 años que asegura entregas exitosas.
          </p>
        </AnimatedSection>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="grid gap-12 lg:grid-cols-2">
            {processSteps.map((step, index) => (
              <AnimatedSection
                key={step.number}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.2}
              >
                <motion.div
                  className="relative p-8 transition-all duration-300 border border-gray-100 bg-gray-50 dark:bg-gray-800 rounded-3xl dark:border-gray-700 hover:shadow-neura"
                  whileHover={{ y: -5 }}
                >
                  {/* Step Number */}
                  <div className="absolute flex items-center justify-center w-12 h-12 text-xl font-bold text-white -top-6 -left-6 bg-neura-gradient rounded-2xl shadow-neura">
                    {step.number}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">{step.description}</p>

                  {/* Deliverables */}
                  <div className="mb-6">
                    <h4 className="mb-3 font-bold text-gray-900 dark:text-white">Entregables clave:</h4>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable, delivIndex) => (
                        <li key={delivIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                          <CheckCircle className="flex-shrink-0 w-4 h-4 mr-3 text-green-500 dark:text-green-400" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {step.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <AnimatedSection className="mb-20">
          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl lg:p-12">
            <div className="mb-12 text-center">
              <h3 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl dark:text-white">
                Nuestra <span className="gradient-text">Metodología</span> Diferencial
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Principios que nos han llevado al 98% de satisfacción cliente
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {methodology.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white shadow-lg rounded-2xl">
                    <item.icon className="w-8 h-8 text-neura-primary" />
                  </div>
                  <h4 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Guarantees */}
        <AnimatedSection className="mb-20">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl dark:text-white">
              Nuestras <span className="gradient-text">Garantías</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Ponemos nuestro prestigio en cada proyecto que desarrollamos
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {guarantees.map((guarantee, index) => (
              <AnimatedSection
                key={guarantee.title}
                direction="up"
                delay={index * 0.1}
              >
                <motion.div
                  className="p-8 text-center transition-all duration-300 bg-white border-2 shadow-lg dark:bg-gray-800 rounded-2xl border-neura-primary/20 dark:border-neura-accent/20 hover:border-neura-primary/40 dark:hover:border-neura-accent/40"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-neura-gradient rounded-3xl shadow-neura">
                    <guarantee.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">{guarantee.title}</h4>
                  <p className="leading-relaxed text-gray-600 dark:text-gray-300">{guarantee.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Process;