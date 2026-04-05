import { motion } from 'framer-motion';
import { useState } from 'react';
import {  
  Users,
  Zap,
  ExternalLink,
  TrendingUp,
  Award,
  Clock,
  Target,
  LucideIcon
} from 'lucide-react';
import AnimatedSection from './common/AnimatedSection';
import AnimatedButton from './common/AnimatedButton';
import { Modal } from './common/Modal';
import Gestus from '../images/Gestus.png';

interface SuccessStat {
  icon: LucideIcon;
  label: string;
  value: string;
}

interface Product {
  name: string;
  description: string;
  shortDesc: string;
  features: string[];
  metrics: Record<string, string>;
  client: string;
  industry: string;
  timeline: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  image: string;
  featured?: boolean;
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };
  const products: Product[] = [
    {
      name: 'Primora',
      description: 'Plataforma para la Gestion del Sistema de Seguridad y Salud en el Trabajo (SG-SST)',
      shortDesc: 'Solución integral para la gestión SST',
      features: [
        'Gestion administrativa de personal',
        'Gestion de riesgos laborales',
        'Automatización de reportes legales',
        'Digitalizacion de procesos SST',
        'Formatos y documentos digitales',
      ],
      metrics: {
        sales: '+120%',
        users: '100+'
      },
      client: 'Gestus Soluciones Integrales SAS',
      industry: 'Seguridad y Salud en el Trabajo',
      timeline: '>8 meses',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      image: Gestus,
      featured: true
    },
    {
      name: 'Universo del Campo',
      description: 'Sistema/Plataforma para la gestion de la ganaderia',
      shortDesc: 'Solución integral para la gestión ganadera',
      features: [
        'Control de inventarios',
        'Gestion de fincas',
        'Monitoreo de animales',
        'Automatización de reportes',
        'Control de costos',
        'Analisis de productividad',
        'Integración con dispositivos IoT',
        'Alertas y notificaciones',
        'Dashboard de indicadores'  
      ],
      metrics: {
        costs: '-30%',
        productivity: '+150%',
        efficiency: '+200%',
        users: '500+'
      },
      client: 'Universo del Campo',
      industry: 'Agricultura y Ganadería',
      timeline: '12 meses',
      icon: Zap,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    }
  ];

  const successStats: SuccessStat[] = [
    { icon: Award, label: 'Proyectos Entregados', value: '25+' },
    { icon: TrendingUp, label: 'ROI Promedio', value: '150%' },
    { icon: Users, label: 'Clientes Activos', value: '200+' },
  ];

  return (
    <section id="products" className="bg-white dark:bg-gray-900 section">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="section-header">
          <motion.div
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium border rounded-full bg-neura-secondary/10 border-neura-secondary/20 text-neura-secondary"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-4 h-4 mr-2" />
            Casos de éxito que inspiran
          </motion.div>
          <h2 className="section-title">
            Productos que <span className="gradient-text">Transforman</span> Industrias
          </h2>
          <p className="section-subtitle">
            Cada proyecto es un testimonio de innovación y resultados excepcionales. 
            Descubre cómo hemos revolucionado negocios reales con soluciones personalizadas.
          </p>
        </AnimatedSection>

        {/* Success Stats */}
        <AnimatedSection className="mb-20">
          <div className="grid grid-cols-2 gap-8 mb-16 lg:grid-cols-4">
            {successStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-neura-gradient rounded-2xl shadow-neura">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="font-medium text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Featured Product */}
        {products.filter(p => p.featured).map((product) => (
          <AnimatedSection key={product.name} className="mb-20">
            <div className="p-8 bg-white border border-gray-200 lg:p-12 dark:bg-gray-800 dark:border-gray-700 rounded-3xl shadow-neura">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center mr-4`}>
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r from-neura-primary to-neura-secondary">
                        CASO DESTACADO
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
                    {product.name}
                  </h3>
                  <p className="mb-6 text-xl text-gray-600 dark:text-gray-300">{product.description}</p>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <AnimatedButton
                      href="#contact"
                      variant="cta"
                      size="lg"
                      icon={<Target className="w-5 h-5" />}
                    >
                      Quiero Resultados Así
                    </AnimatedButton>
                    <motion.button
                      onClick={() => openModal(product)}
                      className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-gray-700 transition-all duration-300 bg-white border-2 border-gray-300 dark:text-gray-200 dark:bg-gray-700 dark:border-gray-600 rounded-xl hover:border-neura-primary dark:hover:border-neura-accent hover:text-neura-primary dark:hover:text-neura-accent"
                    >
                      Ver Caso Completo
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </motion.button>
                  </div>
                </div>

                <div className="relative">
                  <motion.div
                    className="relative overflow-hidden shadow-2xl rounded-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-64 lg:h-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute text-white bottom-4 left-4">
                      <div className="text-sm font-medium">{product.client}</div>
                      <div className="text-xs opacity-90">{product.industry}</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}

        {/* Products Grid */}
        <div className="grid gap-8 mb-20 md:grid-cols-2 lg:grid-cols-3">
          {products.filter(p => !p.featured).map((product, index) => (
            <AnimatedSection
              key={product.name}
              direction="up"
              delay={index * 0.1}
            >
              <motion.div
                className="h-full p-6 transition-all duration-300 bg-white border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 rounded-2xl hover:border-neura-primary/30 dark:hover:border-neura-accent/30"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 128, 128, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Image */}
                <div className="relative h-48 mb-6 overflow-hidden rounded-t-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 w-10 h-10 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center`}>
                    <product.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute text-white bottom-4 left-4">
                    <div className="text-xs font-medium">{product.client}</div>
                    <div className="text-xs opacity-90">{product.industry}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-0">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{product.name}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">{product.shortDesc}</p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {Object.entries(product.metrics).slice(0, 4).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="p-3 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">{value}</div>
                        <div className="text-xs text-gray-600 capitalize dark:text-gray-300">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center justify-between mb-6 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {product.timeline}
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      En producción
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    onClick={() => openModal(product)}
                    className="flex items-center justify-center w-full py-3 font-semibold text-gray-800 transition-all duration-300 bg-white border-2 border-gray-200 rounded-lg dark:text-gray-200 dark:bg-gray-700 dark:border-gray-600 hover:border-neura-primary hover:text-neura-primary group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Ver caso completo
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedProduct && (
          <div className="w-full max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="relative h-64 sm:h-80 bg-gradient-to-br from-neura-primary to-neura-secondary">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative flex items-center justify-center h-full p-4 text-white sm:p-8">
                <div className="text-center">
                  <selectedProduct.icon className="w-12 h-12 mx-auto mb-4 sm:w-16 sm:h-16" />
                  <h2 className="mb-2 text-2xl font-bold sm:text-4xl">{selectedProduct.name}</h2>
                  <p className="text-base sm:text-xl opacity-90">{selectedProduct.description}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 lg:p-8">
              {/* Project Info */}
              <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-3 sm:gap-6 sm:mb-8">
                <div className="p-3 text-center rounded-lg sm:p-4 bg-gray-50 dark:bg-gray-700">
                  <Users className="w-6 h-6 mx-auto mb-2 sm:w-8 sm:h-8 text-neura-primary" />
                  <h4 className="text-sm font-bold text-gray-900 sm:text-base dark:text-white">{selectedProduct.client}</h4>
                  <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-300">{selectedProduct.industry}</p>
                </div>
                <div className="p-3 text-center rounded-lg sm:p-4 bg-gray-50 dark:bg-gray-700">
                  <Clock className="w-6 h-6 mx-auto mb-2 sm:w-8 sm:h-8 text-neura-primary" />
                  <h4 className="text-sm font-bold text-gray-900 sm:text-base dark:text-white">Duración</h4>
                  <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-300">{selectedProduct.timeline}</p>
                </div>
                <div className="p-3 text-center rounded-lg sm:p-4 bg-gray-50 dark:bg-gray-700">
                  <Target className="w-6 h-6 mx-auto mb-2 sm:w-8 sm:h-8 text-neura-primary" />
                  <h4 className="text-sm font-bold text-gray-900 sm:text-base dark:text-white">Resultados</h4>
                  <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-300">Excepcionales</p>
                </div>
              </div>
              {/* Features */}
              <div className="mb-6 sm:mb-8">
                <h3 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">Características Principales</h3>
                <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                  {selectedProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-neura-primary"></div>
                      <span className="text-sm text-gray-700 sm:text-base dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="mb-6 sm:mb-8">
                <h3 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">Resultados Alcanzados</h3>
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 sm:gap-4">
                  {Object.entries(selectedProduct.metrics).map(([key, value]) => (
                    <div key={key} className="p-3 text-center rounded-lg sm:p-4 bg-gradient-to-br from-neura-primary/10 to-neura-secondary/10">
                      <div className="mb-1 text-lg font-bold sm:text-2xl text-neura-primary">{value}</div>
                      <div className="text-xs text-gray-600 capitalize sm:text-sm dark:text-gray-400">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <AnimatedButton
                  href="#contact"
                  variant="cta"
                  className="inline-flex items-center justify-center w-full sm:w-auto"
                >
                  Contactar Ventas
                  <ExternalLink className="w-4 h-4 ml-2 sm:w-5 sm:h-5" />
                </AnimatedButton>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Products;