import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone,
  Send,
  Clock,
  Zap,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import AnimatedSection from './common/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Número de WhatsApp (formato sin '+' y sin espacios)
    const phoneNumber = "573043591840";
    
    // Crear mensaje estructurado
    const message = `
🚀 *NUEVA CONSULTA DESDE NEURA.COM*

👤 *INFORMACIÓN DEL CLIENTE:*
• Nombre: ${formData.name}
• Email: ${formData.email}
• Teléfono: ${formData.phone || "No proporcionado"}
• Empresa: ${formData.company || "No proporcionada"}

💼 *DETALLES DEL PROYECTO:*
• Tipo: ${formData.projectType || "No especificado"}
• Presupuesto: ${formData.budget || "A consultar"}
• Timeline: ${formData.timeline || "Flexible"}

📝 *MENSAJE:*
${formData.message || "Sin mensaje adicional"}

---
*Consulta generada desde neuracorp.com.co*
Fecha: ${new Date().toLocaleDateString('es-ES')}
    `.trim();
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Simular tiempo de procesamiento
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      setIsSubmitting(false);
      
      // Reiniciar formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Llámanos Directamente',
      content: '+57 304 359 1840',
      href: 'tel:+573043591840',
      description: 'Respuesta inmediata en horario laboral'
    },
    {
      icon: Mail,
      title: 'Escríbenos un Email',
      content: 'neura.admt@gmail.com',
      href: 'mailto:neura.admt@gmail.com',
      description: 'Respuesta garantizada en horario laboral'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Business',
      content: 'Chat directo',
      href: 'https://wa.me/573043591840',
      description: 'Disponible en horario laboral'
    }
  ];

  const projectTypes = [
    'Desarrollo SaaS',
    'Aplicación Web',
    'Página Web Corporativa',
    'Sistema a Medida',
    'Business Intelligence',
    'Automatización',
    'Consultoría Técnica',
    'Otro'
  ];

  const timelines = [
    'Urgente (1-2 meses)',
    'Rápido (2-4 meses)',
    'Estándar (4-6 meses)',
    'Flexible (6+ meses)',
    'A definir'
  ];

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="section-header">
          <motion.div
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-green-700 bg-green-100 border border-green-200 rounded-full dark:bg-green-900 dark:border-green-700 dark:text-green-300"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 mr-2" />
            Contactanos y Empecemos a Crear
          </motion.div>
          <h2 className="section-title">
            Transformemos tu Idea en <span className="gradient-text">Realidad</span>
          </h2>
          <p className="section-subtitle">
            Contáctanos hoy y recibe una propuesta personalizada en 24 horas. 
            Nuestro equipo está listo para convertir tu visión en el próximo gran éxito digital.
          </p>
        </AnimatedSection>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <AnimatedSection direction="left">
            <div className="p-8 bg-white border border-gray-100 dark:bg-gray-800 rounded-3xl lg:p-10 shadow-neura dark:border-gray-700">
              <div className="mb-8">
                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                  Cuéntanos sobre tu Proyecto
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Completa el formulario y recibe una propuesta personalizada en tiempo récord
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Tipo de Proyecto
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Seleccionar...</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Seleccionar...</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Describe tu Proyecto
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="form-textarea"
                    placeholder="Cuéntanos qué necesitas, tus objetivos y cualquier detalle relevante..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-cta ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="mr-3 loading-dots"></div>
                      Procesando...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Consulta
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-center text-gray-500">
                  Al enviar este formulario, aceptas que nos contactemos contigo para brindarte información sobre nuestros servicios.
                </p>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <AnimatedSection direction="right">
              <div className="p-8 text-white bg-neura-gradient rounded-3xl">
                <h3 className="mb-6 text-2xl font-bold">¿Prefieres Hablar Directamente?</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      className="flex items-start p-4 space-x-4 transition-all duration-300 bg-white/10 rounded-xl hover:bg-white/20 group"
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1 text-lg font-bold">{info.title}</h4>
                        <p className="mb-1 text-lg font-semibold text-neura-light">{info.content}</p>
                        <p className="text-sm text-neura-light/80">{info.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 transition-all duration-200 text-white/70 group-hover:text-white group-hover:translate-x-1" />
                    </motion.a>
                  ))}
                </div>

                <div className="p-4 mt-8 border bg-white/10 rounded-xl border-white/20">
                  <div className="flex items-center mb-3">
                    <Clock className="w-5 h-5 mr-2 text-neura-light" />
                    <span className="font-semibold">Horarios de Atención</span>
                  </div>
                  <div className="space-y-1 text-sm text-neura-light">
                    <p>Lunes - Viernes: 8:00 AM - 5:00 PM</p>
                    <p>Sábados: 8:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;