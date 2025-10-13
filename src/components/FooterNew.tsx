import { motion } from 'framer-motion';
import Logo from '../images/logo.png';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram,
  Github, 
  Youtube,
  ArrowRight,
  Star,
  Award,
  Zap
} from 'lucide-react';

const Footer = () => {

  const services = [
    {
      name: 'Desarrollo SaaS Personalizado',
      href: '#services'
    },
    {
      name: 'Creación de Páginas Web',
      href: '#services'
    },
    {
      name: 'Gestión de Proyectos y Consultoría',
      href: '#services'
    },
    {
      name: 'Servicios de Integración y Soporte',
      href: '#services'
    },
    {
      name: 'Implementación y Capacitación',
      href: '#services'
    },
    {
      name: 'Automatización y Agentes de IA',
      href: '#services'
    }
  ];

  const footerLinks = {
    solutions: services,
    company: [
      { name: 'Sobre Nosotros', href: '#about' },
      { name: 'Nuestro Equipo', href: '#team' },
      { name: 'Proceso de Trabajo', href: '#process' },
      { name: 'Casos de Éxito', href: '#testimonials' },
      { name: 'Blog Técnico', href: '#' },
      { name: 'Carreras', href: '#' }
    ],
    legal: [
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Términos de Servicio', href: '#' },
      { name: 'Acuerdo de Nivel de Servicio', href: '#' },
      { name: 'Política de Cookies', href: '#' },
      { name: 'GDPR Compliance', href: '#' },
      { name: 'Seguridad', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/NeuraAdm', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/NeuraAdmt', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/neura_corp', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@Neura-adm', label: 'YouTube' },
    { icon: Facebook, href: 'https://facebook.com/NeuraEmp', label: 'Facebook' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+57 304 359 1840', href: 'tel:+573043591840' },
    { icon: Mail, text: 'neura.admt@gmail.com', href: 'mailto:neura.admt@gmail.com' },
    { icon: MapPin, text: 'Pereira, Colombia', href: '#contact' }
  ];

  const achievements = [
    { icon: Star, text: '25+ Proyectos' },
    { icon: Award, text: '98% Satisfacción' },
    { icon: Zap, text: '2 Años Experiencia' }
  ];

  return (
    <footer className="relative overflow-hidden text-white bg-gradient-to-br from-gray-900 via-neura-dark to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute w-20 h-20 rounded-full top-10 left-10 bg-neura-accent/10 blur-xl"></div>
      <div className="absolute w-32 h-32 rounded-full top-32 right-20 bg-neura-secondary/10 blur-2xl"></div>
      <div className="absolute w-24 h-24 rounded-full bottom-20 left-1/3 bg-neura-primary/10 blur-xl"></div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Company Info - Takes 4 columns */}
            <motion.div 
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo and Brand */}
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 mr-4 bg-white border-2 dark:bg-gray-800 rounded-xl shadow-neura border-neura-primary/20 dark:border-neura-accent/30">
                  <img src={Logo} alt="Neura Logo" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-neura-light to-white bg-clip-text">
                    Neura
                  </h3>
                  <p className="text-sm text-neura-light/80">Tech Solutions</p>
                </div>
              </div>

              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                Transformamos ideas en <span className="font-semibold text-neura-light">soluciones digitales innovadoras</span> que 
                impulsan el crecimiento de tu negocio y te posicionan como líder en tu industria.
              </p>

              {/* Achievements */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.text}
                    className="p-3 text-center border rounded-lg bg-white/5 border-white/10"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <achievement.icon className="w-6 h-6 mx-auto mb-2 text-neura-accent" />
                    <p className="text-xs font-semibold text-neura-light">{achievement.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mb-6 space-y-3">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.text}
                    href={info.href}
                    className="flex items-center text-gray-300 transition-colors duration-200 hover:text-neura-light group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <info.icon className="w-5 h-5 mr-3 transition-colors duration-200 text-neura-accent group-hover:text-neura-light" />
                    <span className="text-sm">{info.text}</span>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-300 rounded-lg bg-white/10 hover:text-white hover:bg-neura-primary"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Grid - Takes 8 columns */}
            <div className="grid gap-8 lg:col-span-8 md:grid-cols-4">
              {/* Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="flex items-center mb-6 text-lg font-semibold text-neura-light">
                  <Zap className="w-5 h-5 mr-2" />
                  Soluciones
                </h4>
                <ul className="space-y-3">
                  {footerLinks.solutions.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="flex items-center text-sm text-gray-400 transition-colors duration-200 hover:text-neura-light group"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-3 h-3 mr-2 transition-opacity duration-200 opacity-0 group-hover:opacity-100" />
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="flex items-center mb-6 text-lg font-semibold text-neura-light">
                  <Award className="w-5 h-5 mr-2" />
                  Empresa
                </h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="flex items-center text-sm text-gray-400 transition-colors duration-200 hover:text-neura-light group"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-3 h-3 mr-2 transition-opacity duration-200 opacity-0 group-hover:opacity-100" />
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Legal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="flex items-center mb-6 text-lg font-semibold text-neura-light">
                  <Star className="w-5 h-5 mr-2" />
                  Legal
                </h4>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="flex items-center text-sm text-gray-400 transition-colors duration-200 hover:text-neura-light group"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-3 h-3 mr-2 transition-opacity duration-200 opacity-0 group-hover:opacity-100" />
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="py-8 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-xl font-bold text-neura-light">
                🚀 Mantente al día con las últimas innovaciones
              </h4>
              <p className="text-gray-400">
                Recibe insights exclusivos sobre tecnología, casos de éxito y tendencias del mercado.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="tu@empresa.com"
                className="flex-1 px-4 py-3 text-white placeholder-gray-400 border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-neura-accent focus:border-transparent"
              />
              <motion.button
                className="flex items-center justify-center px-6 py-3 font-semibold text-white transition-all duration-300 rounded-lg bg-neura-gradient hover:shadow-neura-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Suscribirse
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;