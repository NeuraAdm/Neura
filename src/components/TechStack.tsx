import { motion } from 'framer-motion';
import { 
  Database, 
  Cloud,
  Monitor,
  Layers
} from 'lucide-react';
import AnimatedSection from './common/AnimatedSection';

const TechStack = () => {
  const technologies = [
    {
      category: 'Frontend',
      icon: Monitor,
      color: 'from-blue-500 to-blue-600',
      technologies: [
        { name: 'React', level: 90, description: 'Biblioteca principal para interfaces' },
        { name: 'Tailwind CSS', level: 100, description: 'Diseño utility-first' },
        { name: 'VueJS', level: 70, description: 'Framework progresivo' },
        { name: 'JavaScript', level: 80, description: 'Interactividad y Dinamismo' },
        { name: 'NextJS', level: 80, description: 'Framework para desarrollo web' }
      ]
    },
    {
      category: 'Backend',
      icon: Database,
      color: 'from-green-500 to-green-600',
      technologies: [
        { name: 'Node.js', level: 90, description: 'Runtime JavaScript escalable' },
        { name: 'Python', level: 85, description: 'IA y desarrollo web' },
        { name: 'PostgreSQL', level: 95, description: 'Base de datos relacional' },
        { name: 'MongoDB', level: 70, description: 'Base de datos NoSQL' },
        { name: 'Django', level: 75, description: 'Framework web Python' },
        { name: 'Laravel', level: 70, description: 'Framework PHP' },
        { name: 'Express.js', level: 95, description: 'Framework web Node.js' },
        { name: 'PHP', level: 70, description: 'Lenguaje de servidor' },
        { name: 'NestJS', level: 85, description: 'Framework para desarrollo web' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-purple-500 to-purple-600',
      technologies: [
        { name: 'AWS', level: 80, description: 'Servicios cloud principales' },
        { name: 'Docker', level: 90, description: 'Contenedorización' },
        { name: 'CI/CD', level: 85, description: 'Pipelines automatizados' },
        { name: 'Cloudflare', level: 90, description: 'Servicio de entrega de contenido' },
        { name: 'Azure', level: 75, description: 'Servicios cloud Microsoft' },
        { name: 'GitHub Actions', level: 80, description: 'Automatización de flujos de trabajo' },
        { name: 'Firebase', level: 85, description: 'Servicios de backend en la nube' },
        { name: 'Supabase', level: 70, description: 'Gestion de bases de datos en la nube+auth+storage' },
        { name: 'Netlify', level: 80, description: 'Plataforma de despliegue y funciones serverless' }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="transition-colors duration-300 bg-white section dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="section-header">
          <motion.div
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium border rounded-full bg-neura-primary/10 dark:bg-neura-accent/20 border-neura-primary/20 dark:border-neura-accent/30 text-neura-primary dark:text-neura-accent"
            whileHover={{ scale: 1.05 }}
          >
            <Layers className="w-4 h-4 mr-2" />
            Stack Tecnológico Avanzado
          </motion.div>
          <h2 className="text-gray-900 section-title dark:text-white">
            Tecnologías de <span className="gradient-text">Vanguardia</span>
          </h2>
          <p className="text-gray-600 section-subtitle dark:text-gray-300">
            Utilizamos las herramientas y frameworks más modernos del mercado para 
            construir soluciones escalables, seguras y de alto rendimiento.
          </p>
        </AnimatedSection>

        {/* Tech Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((category, categoryIndex) => (
            <AnimatedSection
              key={category.category}
              direction="up"
              delay={categoryIndex * 0.1}
            >
              <div className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-lg dark:bg-gray-800 rounded-2xl dark:shadow-xl hover:shadow-neura-lg dark:hover:shadow-neura-xl dark:border-gray-700">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.category}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {category.technologies.length} tecnologías
                    </p>
                  </div>
                </div>

                {/* Technologies List */}
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      className="cursor-pointer group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-800 transition-colors duration-200 dark:text-gray-200 group-hover:text-neura-primary dark:group-hover:text-neura-accent">
                          {tech.name}
                        </span>
                        <span className="text-sm font-medium text-neura-primary dark:text-neura-accent">
                          {tech.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full h-2 mb-1 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700">
                        <motion.div
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: techIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      
                      <p className="text-xs text-gray-500 transition-colors duration-200 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                        {tech.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Category Stats */}
                <div className="pt-4 mt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Experiencia promedio
                    </span>
                    <span className="font-bold text-neura-primary dark:text-neura-accent">
                      {Math.round(category.technologies.reduce((acc, tech) => acc + tech.level, 0) / category.technologies.length)}%
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;