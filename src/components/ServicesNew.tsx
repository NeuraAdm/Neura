import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Code, 
  Cloud, 
  Database, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  LucideIcon,
  ExternalLink,
  Clock,
  Target,
  Award,
} from 'lucide-react';
import AnimatedSection from './common/AnimatedSection';
import AnimatedButton from './common/AnimatedButton';
import { Modal } from './common/Modal';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  benefit: string;
  color: string;
  bgColor: string;
  borderColor: string;
  popular?: boolean;
  detailedFeatures?: string[];
  metrics?: Record<string, string>;
  process?: string[];
  timeline?: string;
  investment?: string;
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };
  const services: Service[] = [
    {
      icon: Code,
      title: 'Desarrollo SaaS Personalizado',
      description: 'Aplicaciones web escalables que revolucionan tu modelo de negocio',
      features: ['Arquitectura moderna', 'APIs robustas', 'Integración completa'],
      benefit: 'Aumenta Productividad 250%',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      popular: true,
      detailedFeatures: [
        'Arquitectura Modular Escalable',
        'APIs RESTful',
        'Dashboard administrativo completo',
        'Notificaciones en tiempo real',
        'Analytics y métricas avanzadas',
        'Soporte multi-servicio'
      ],
      metrics: {
        'Tiempo de desarrollo': '3-6 meses',
        'ROI esperado': '+150%',
        'Uptime garantizado': '99.9%'
      },
      process: [
        'Análisis de Requerimientos y Arquitectura',
        'Diseño UX/UI y prototipado',
        'Desarrollo Backend y Frontend',
        'Integración y Testing',
        'Despliegue y Soporte Post-lanzamiento'
      ],
      timeline: '3-6 meses',
      investment: 'Contactar Con Ventas'
    },
    {
      icon: Users,
      title: 'Creación de Páginas Web',
      description: 'Sitios web efectivos y atractivos para crear una presencia en línea exitosa',
      features: ['Diseño Responsive', 'SEO Optimizado', 'Gestión de Contenido'],
      benefit: 'Engagement +150%',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      detailedFeatures: [
        'Diseño web responsive y moderno',
        'Optimización SEO completa',
        'Sistema de gestión de contenido',
        'Integración con redes sociales',
        'Formularios de contacto avanzados',
        'Analytics y métricas de rendimiento',
        'Hosting y dominio incluido',
        'Certificado SSL y seguridad'
      ],
      metrics: {
        'Tiempo de desarrollo': '2-6 semanas',
        'Mejora en conversiones': '+160%',
        'Posicionamiento SEO': '+120%',
        'Velocidad de carga': '<3 segundos'
      },
      process: [
        'Análisis de requerimientos y objetivos',
        'Diseño UX/UI y prototipado',
        'Desarrollo frontend y backend',
        'Optimización SEO y testing',
        'Lanzamiento y capacitación'
      ],
      timeline: '2-6 semanas',
      investment: 'Desde $500,000COP  130USD'
    },
    {
      icon: Cloud,
      title: 'Gestión de Proyectos y Consultoría',
      description: 'Gestión integral de proyectos de software y consultoría especializada',
      features: ['Gestión Ágil', 'Consultoría Técnica', 'Migración de Sistemas'],
      benefit: 'Eficiencia +200%',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      detailedFeatures: [
        'Gestión de proyectos con metodologías ágiles',
        'Consultoría en adopción de nuevas tecnologías',
        'Migración de software y sistemas legacy',
        'Optimización de procesos de desarrollo',
        'Implementación de mejores prácticas',
        'Auditoría de arquitectura de software',
        'Planificación estratégica tecnológica',
        'Capacitación y entrenamiento de equipos'
      ],
      metrics: {
        'Mejora en eficiencia': '+200%',
        'Reducción de tiempos': '-50%',
        'Éxito de proyectos': '98%',
        'Satisfacción del cliente': '4.9/5'
      },
      process: [
        'Evaluación de situación actual',
        'Diseño de estrategia y roadmap',
        'Implementación gradual',
        'Monitoreo y optimización continua',
        'Entrenamiento y transferencia'
      ],
      timeline: '1-2 meses',
      investment: 'Desde $250,000COP  65USD'
    },
    {
      icon: Database,
      title: 'Servicios de Integración y Soporte',
      description: 'Integración de software, mantenimiento y soporte técnico especializado',
      features: ['Integración de Sistemas', 'Soporte 24/7', 'Mantenimiento Preventivo'],
      benefit: 'Uptime 99.9%',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      detailedFeatures: [
        'Integración de software y APIs',
        'Mantenimiento preventivo y correctivo',
        'Soporte técnico 24/7',
        'Monitoreo proactivo de sistemas',
        'Actualizaciones y parches de seguridad',
        'Backup automatizado y recovery',
        'Documentación técnica completa',
        'SLA garantizado'
      ],
      metrics: {
        'Uptime garantizado': '99.9%',
        'Tiempo de respuesta': '<2 horas',
        'Resolución de incidentes': '95% en 24h',
        'Satisfacción soporte': '4.8/5'
      },
      process: [
        'Análisis de sistemas existentes',
        'Diseño de estrategia de integración',
        'Implementación y testing',
        'Monitoreo y soporte continuo',
        'Optimización y mejoras'
      ],
      timeline: '2-8 semanas',
      investment: 'Desde $300,000COP  80USD'
    },
    {
      icon: Shield,
      title: 'Implementación y Capacitación',
      description: 'Implementación exitosa de software y capacitación especializada',
      features: ['Implementación Guiada', 'Capacitación Personalizada', 'Documentación'],
      benefit: 'Adopción 95%',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      detailedFeatures: [
        'Implementación guiada paso a paso',
        'Capacitación personalizada por roles',
        'Documentación y manuales de usuario',
        'Sesiones de entrenamiento práctico',
        'Acompañamiento post-implementación',
        'Configuración y personalización',
        'Migración de datos existentes',
        'Validación y testing de usuario'
      ],
      metrics: {
        'Tasa de adopción': '95%',
        'Tiempo de implementación': '-40%',
        'Satisfacción usuarios': '4.7/5',
        'Reducción errores': '90%'
      },
      process: [
        'Análisis de necesidades y roles',
        'Planificación de implementación',
        'Configuración y migración de datos',
        'Capacitación y entrenamiento',
        'Go-live y soporte inicial'
      ],
      timeline: '2-4 meses',
      investment: 'Desde $250,000COP  65USD'
    },
    {
      icon: Zap,
      title: 'Automatización y Agentes de IA',
      description: 'Automatización inteligente con agentes de IA que revolucionan tus procesos',
      features: ['Agentes de IA', 'RPA Inteligente', 'Workflows Automatizados'],
      benefit: 'Ahorro 60 horas/semana',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      detailedFeatures: [
        'Agentes de IA conversacionales',
        'Automatización de procesos con IA',
        'Chatbots inteligentes multicanal',
        'Asistentes virtuales especializados',
        'Automatización de atención al cliente',
        'Procesamiento inteligente de documentos',
        'Integración con sistemas existentes'
      ],
      metrics: {
        'Ahorro tiempo': '60+ hrs/semana',
        'Reducción costos operativos': '70%',
        'Precisión en tareas': '99.5%',
        'Satisfacción del cliente': '4.9/5'
      },
      process: [
        'Análisis de procesos candidatos',
        'Diseño de agentes de IA especializados',
        'Desarrollo y entrenamiento de modelos',
        'Implementación y testing',
        'Monitoreo y optimización continua'
      ],
      timeline: '1-3 meses',
      investment: 'Desde $200,000COP  55USD'
    }
  ];

  const processSteps = [
    { number: '01', title: 'Análisis', description: 'Evaluamos tu situación actual' },
    { number: '02', title: 'Estrategia', description: 'Diseñamos la solución perfecta' },
    { number: '03', title: 'Desarrollo', description: 'Construimos con metodologías ágiles' },
    { number: '04', title: 'Lanzamiento', description: 'Implementamos y optimizamos' }
  ];

  return (
    <section id="services" className="section bg-gray-50 dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="section-header">
          <motion.div
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium border rounded-full bg-neura-primary/10 dark:bg-neura-accent/10 border-neura-primary/20 dark:border-neura-accent/20 text-neura-primary dark:text-neura-accent"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 mr-2" />
            Servicios que transforman negocios
          </motion.div>
          <h2 className="text-gray-900 section-title dark:text-white">
            Servicios que <span className="gradient-text">Multiplican</span> tu Éxito
          </h2>
          <p className="text-gray-600 section-subtitle dark:text-gray-300">
            Cada solución está diseñada para generar <strong className="text-neura-primary dark:text-neura-accent">resultados medibles</strong> y 
            posicionar tu empresa como líder en tu industria.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid gap-8 mb-20 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              direction="up"
              delay={index * 0.1}
            >
              <motion.div
                itemScope
                itemType="https://schema.org/Service"
                className={`relative p-6 h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 128, 128, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg -top-3 -right-3 bg-gradient-to-r from-neura-primary to-neura-secondary">
                    Más Popular
                  </div>
                )}

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 itemProp="name" className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                <p itemProp="description" className="mb-6 text-gray-600 dark:text-gray-300">{service.description}</p>

                {/* Features */}
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300" itemProp="serviceType">
                      <CheckCircle className="flex-shrink-0 w-4 h-4 mr-2 text-green-500 dark:text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Benefit */}
                <div className="p-3 mb-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Resultado esperado:</span>
                    <span className="text-lg font-bold text-neura-primary" itemProp="slogan">{service.benefit}</span>
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  onClick={() => openModal(service)}
                  itemProp="url"
                  className="flex items-center justify-center w-full py-3 font-semibold text-gray-800 transition-all duration-300 bg-white border-2 border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 hover:border-neura-primary dark:hover:border-neura-accent hover:text-neura-primary dark:hover:text-neura-accent group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Ver detalles
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </motion.button>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Process Section */}
        <AnimatedSection>
          <div className="p-8 bg-white dark:bg-gray-800 rounded-3xl lg:p-12 shadow-neura">
            <div className="mb-12 text-center">
              <h3 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl dark:text-white">
                Nuestro Proceso <span className="gradient-text">Probado</span>
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Metodología que garantiza el éxito en cada proyecto
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-6">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-neura-gradient shadow-neura">
                      <span className="text-xl font-bold text-white">{step.number}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-neura-primary to-neura-secondary transform -translate-x-8"></div>
                    )}
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">{step.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="mt-16 text-center">
          <div className="p-8 text-white bg-neura-gradient rounded-2xl lg:p-12">
            <h3 className="mb-4 text-3xl font-bold lg:text-4xl">
              ¿Listo para Transformar tu Negocio?
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-xl text-neura-light">
              Únete a más de 10 empresas que ya confían en nuestras soluciones.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 mb-6 sm:flex-row">
              <AnimatedButton
                href="#contact"
                variant="secondary"
                size="lg"
                className="bg-white border-white dark:bg-gray-800 text-neura-primary dark:text-neura-accent dark:border-gray-600 hover:bg-neura-light dark:hover:bg-gray-700 hover:text-neura-dark dark:hover:text-white"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Consulta
              </AnimatedButton>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-neura-light">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                25+ clientes satisfechos
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                ROI promedio 150%
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Garantía de satisfacción
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Service Detail Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedService && (
          <div className="w-full max-w-5xl p-4 mx-auto sm:p-6">
            <div className="flex flex-col items-start gap-4 mb-6 sm:flex-row sm:items-center">
              <div className={`w-16 h-16 bg-gradient-to-r ${selectedService.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                <selectedService.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">{selectedService.title}</h3>
                <p className="text-base text-gray-600 sm:text-lg dark:text-gray-300">{selectedService.description}</p>
              </div>
            </div>

            <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
              {/* Features & Process */}
              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center mb-4 text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
                    <CheckCircle className="flex-shrink-0 w-5 h-5 mr-2 text-green-500" />
                    Características Incluidas
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.detailedFeatures?.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700 sm:text-base dark:text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center mb-4 text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
                    <Target className="flex-shrink-0 w-5 h-5 mr-2 text-blue-500" />
                    Proceso de Implementación
                  </h4>
                  <ol className="space-y-3">
                    {selectedService.process?.map((step, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700 sm:text-base dark:text-gray-300">
                        <span className="bg-neura-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Metrics & Investment */}
              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center mb-4 text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
                    <TrendingUp className="flex-shrink-0 w-5 h-5 mr-2 text-purple-500" />
                    Resultados Esperados
                  </h4>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {selectedService.metrics && Object.entries(selectedService.metrics).map(([key, value]) => (
                      <div key={key} className="p-3 text-center rounded-lg sm:p-4 bg-gray-50 dark:bg-gray-700">
                        <div className="text-xl font-bold sm:text-2xl text-neura-primary dark:text-neura-accent">{value}</div>
                        <div className="text-xs text-gray-600 sm:text-sm dark:text-gray-300">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 text-white sm:p-6 bg-gradient-to-r from-neura-primary to-neura-secondary rounded-xl">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <Clock className="w-6 h-6 mx-auto mb-2 sm:w-8 sm:h-8" />
                      <div className="text-xs sm:text-sm opacity-90">Tiempo</div>
                      <div className="text-lg font-bold sm:text-xl">{selectedService.timeline}</div>
                    </div>
                    <div>
                      <Award className="w-6 h-6 mx-auto mb-2 sm:w-8 sm:h-8" />
                      <div className="text-xs sm:text-sm opacity-90">Inversión</div>
                      <div className="text-lg font-bold sm:text-xl">{selectedService.investment}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4 mt-6 border-t border-gray-200 sm:flex-row sm:gap-4 sm:mt-8 sm:pt-6 dark:border-gray-600">
              <AnimatedButton
                href="#contact"
                variant="primary"
                size="lg"
                className="flex-1"
                icon={<ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />}
              >
                Solicitar Cotización
              </AnimatedButton>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Services;