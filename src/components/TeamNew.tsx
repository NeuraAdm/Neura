import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Github, 
  Mail,
  Award,
  Code,
  Users,
  Star,
  Zap
} from 'lucide-react';
import AnimatedSection from './common/AnimatedSection';
import juan from '../images/Juan.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Juan Pablo Arias',
      role: 'CEO & Founder',
      title: 'Visionario Tecnológico',
      image: juan ,
      bio: 'Arquitecto de soluciones empresariales con 2+ años transformando visiones en realidades digitales. Especialista en arquitecturas escalables y desarrollo full-stack.',
      expertise: ['Arquitecto de Software', 'Desarrollador Full Stack', 'Gestión de Proyectos', 'Liderazgo Técnico', 'Tech Lead'],
      achievements: ['30+ proyectos liderados'],
      personality: 'Innovador incansable que encuentra soluciones donde otros ven problemas',
      social: {
        linkedin: 'https:///linkedin.com/in/juan-pablo-a-a62719142',
        twitter: 'https://twitter.com/NeuraAdmt',
        github: 'https://github.com/NeuraAdm',
        email: 'neura.admt@gmail.com'
      },
      gradient: 'from-blue-500 to-purple-600',
      featured: true
    },
    // {
    //   name: 'María González',
    //   role: 'CTO & Co-founder',
    //   title: 'Arquitecta de Innovación',
    //   image: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    //   bio: 'Experta en arquitecturas cloud escalables y DevOps. Lidera equipos técnicos hacia la excelencia operacional.',
    //   expertise: ['Cloud Architecture', 'DevOps & CI/CD', 'Cybersecurity', 'Team Building'],
    //   achievements: ['AWS Solutions Architect', '99.99% uptime record', 'Google Cloud Expert'],
    //   personality: 'Perfeccionista que convierte complejidad en simplicidad elegante',
    //   social: {
    //     linkedin: 'https://linkedin.com/in/mariagonzalez',
    //     twitter: 'https://twitter.com/maria_dev',
    //     github: 'https://github.com/mariagonzalez',
    //     email: 'maria@neura.com'
    //   },
    //   gradient: 'from-green-500 to-teal-600'
    // }
  ];

  return (
    <section id="team" className="bg-white section dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="section-header">
          <motion.div
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-purple-700 bg-purple-100 border border-purple-200 rounded-full dark:text-purple-300 dark:bg-purple-900 dark:border-purple-700"
            whileHover={{ scale: 1.05 }}
          >
            <Users className="w-4 h-4 mr-2" />
            El talento que hace la diferencia
          </motion.div>
          <h2 className="section-title">
            Conoce a los <span className="gradient-text">Arquitectos</span> de tu Éxito
          </h2>
          <p className="section-subtitle">
            Cada miembro de nuestro equipo aporta años de experiencia y una pasión genuina por 
            crear soluciones que transforman negocios. Conoce a las personas detrás de la magia.
          </p>
        </AnimatedSection>

        {/* Featured Member */}
        {teamMembers.filter(member => member.featured).map((member) => (
          <AnimatedSection key={member.name} className="mb-20">
            <div className="p-8 border border-gray-100 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl lg:p-12 dark:border-gray-600 shadow-neura">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-6">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-64 h-64 mx-auto shadow-2xl rounded-3xl lg:mx-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-neura-primary/10 via-transparent to-neura-secondary/10 rounded-3xl hover:opacity-100"></div>
                    
                    {/* Enhanced Award Badge */}
                    <motion.div 
                      className="absolute p-3 bg-white border-2 shadow-xl -bottom-4 -right-4 dark:bg-gray-800 rounded-2xl border-neura-primary/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Award className="w-8 h-8 text-neura-primary" />
                    </motion.div>
                    
                    {/* Decorative Particles */}
                    <div className="absolute w-3 h-3 rounded-full top-4 left-4 bg-neura-accent opacity-60 animate-pulse"></div>
                    <div className="absolute w-2 h-2 delay-500 rounded-full top-8 right-8 bg-neura-secondary opacity-40 animate-pulse"></div>
                    <div className="absolute w-4 h-4 rounded-full bottom-12 left-6 bg-neura-primary/30 blur-sm"></div>
                  </div>
                  
                  <div className="text-center lg:text-left">
                    <span className="inline-block px-4 py-2 mb-4 text-sm font-bold text-white rounded-full bg-gradient-to-r from-neura-primary to-neura-secondary">
                      FUNDADOR
                    </span>
                    <h3 className="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl dark:text-white">
                      {member.name}
                    </h3>
                    <p className="mb-4 text-xl font-semibold text-neura-primary">{member.role}</p>
                    <p className="mb-6 text-lg italic text-gray-600 dark:text-gray-300">{member.personality}</p>
                  </div>
                </div>

                <div className="space-y-6">

                  <div>
                    <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Logros Destacados</h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Especialidades</h4>
                    <div className="flex flex-wrap gap-3">
                      {member.expertise.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={member.social.linkedin}
                      className="p-3 text-blue-600 transition-colors duration-200 bg-blue-100 rounded-lg dark:text-blue-400 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={member.social.email}
                      className="p-3 text-green-600 transition-colors duration-200 bg-green-100 rounded-lg dark:text-green-400 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={member.social.github}
                      className="p-3 text-gray-600 transition-colors duration-200 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}

        {/* Team Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {teamMembers.filter(member => !member.featured).map((member, index) => (
            <AnimatedSection
              key={member.name}
              direction="up"
              delay={index * 0.1}
            >
              <motion.div
                className="relative h-full p-6 overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 rounded-2xl hover:shadow-xl group"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Profile Image */}
                <div className="relative mb-6 text-center">
                  <motion.div className="relative inline-block">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="object-cover mx-auto shadow-lg w-28 h-28 sm:w-32 sm:h-32 rounded-2xl ring-4 ring-white dark:ring-gray-700"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${member.gradient} rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center`}>
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="mb-6 space-y-2 text-center">
                  <h3 className="text-lg font-bold text-gray-900 sm:text-xl dark:text-white">{member.name}</h3>
                  <p className="text-sm font-semibold text-neura-primary dark:text-neura-accent">{member.role}</p>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>

                {/* Enhanced Skills Section */}
                <div className="mb-6">
                  <h4 className="flex items-center mb-3 text-sm font-bold text-gray-900 dark:text-white">
                    <Code className="w-4 h-4 mr-2 text-neura-primary dark:text-neura-accent" />
                    Especialidades
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 rounded-full border border-gray-200 dark:border-gray-600 hover:border-neura-primary dark:hover:border-neura-accent transition-all duration-200 cursor-default"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + skillIndex * 0.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <motion.a
                    href={member.social.linkedin}
                    className="p-2 text-gray-600 transition-colors duration-200 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-gray-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={member.social.email}
                    className="p-2 text-gray-600 transition-colors duration-200 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300 hover:bg-green-100 hover:text-green-600 dark:hover:bg-gray-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={member.social.github}
                    className="p-2 text-gray-600 transition-colors duration-200 bg-gray-100 rounded-lg dark:text-gray-300 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;