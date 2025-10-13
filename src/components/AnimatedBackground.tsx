import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useMemo } from 'react';

const AnimatedBackground = () => {
  const { isDarkMode } = useTheme();

  // Memoize particle positions for better performance
  const particles = useMemo(() => 
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 10,
      moveX: Math.random() * 100 - 50,
    })), []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large gradient orbs - optimized for dark mode visibility */}
      <motion.div
        className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl will-change-transform ${
          isDarkMode 
            ? 'bg-gradient-to-r from-neura-primary/25 to-neura-secondary/20' 
            : 'bg-gradient-to-r from-neura-primary/10 to-neura-secondary/8'
        }`}
        animate={{
          x: [0, 150, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          type: "tween"
        }}
      />
      
      <motion.div
        className={`absolute bottom-32 right-1/3 w-80 h-80 rounded-full blur-3xl will-change-transform ${
          isDarkMode 
            ? 'bg-gradient-to-r from-neura-accent/30 to-purple-500/20' 
            : 'bg-gradient-to-r from-neura-accent/12 to-purple-500/8'
        }`}
        animate={{
          x: [0, -200, 0],
          y: [0, 120, 0],
          scale: [1, 0.7, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          type: "tween"
        }}
      />
      
      <motion.div
        className={`absolute top-1/2 right-20 w-72 h-72 rounded-full blur-3xl will-change-transform ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-500/25 to-neura-primary/30' 
            : 'bg-gradient-to-r from-blue-500/10 to-neura-primary/12'
        }`}
        animate={{
          x: [0, 100, 0],
          y: [0, -150, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          type: "tween"
        }}
      />

      {/* Medium orbs for more depth */}
      <motion.div
        className={`absolute top-3/4 left-20 w-64 h-64 rounded-full blur-2xl will-change-transform ${
          isDarkMode 
            ? 'bg-gradient-to-r from-emerald-500/20 to-neura-accent/25' 
            : 'bg-gradient-to-r from-emerald-500/8 to-neura-accent/10'
        }`}
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
          type: "tween"
        }}
      />
      
      {/* Optimized floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full will-change-opacity ${
              isDarkMode 
                ? 'bg-neura-primary/40' 
                : 'bg-neura-primary/25'
            }`}
            style={{
              width: particle.size + 'px',
              height: particle.size + 'px',
              left: particle.left + '%',
              top: particle.top + '%',
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, particle.moveX, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
              type: "tween"
            }}
          />
        ))}
      </div>
      
      {/* Geometric shapes for modern touch - visible in dark mode */}
      {isDarkMode && (
        <>
          <motion.div
            className="absolute top-40 right-1/2 w-16 h-16 border-2 border-neura-accent/20 will-change-transform"
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              type: "tween"
            }}
          />

          <motion.div
            className="absolute bottom-1/3 left-1/3 w-12 h-12 rounded-full border-2 border-neura-secondary/30 will-change-transform"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 2, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              type: "tween"
            }}
          />
        </>
      )}
      
      {/* Enhanced grid pattern */}
      <div className={`absolute inset-0 ${
        isDarkMode 
          ? 'bg-grid-pattern-dark opacity-30' 
          : 'bg-grid-pattern opacity-15'
      }`}></div>

      {/* Optimized gradient overlay */}
      <div className={`absolute inset-0 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900/60 via-transparent to-gray-800/40' 
          : 'bg-gradient-to-br from-white/40 via-transparent to-gray-50/60'
      }`}></div>
    </div>
  );
};

export default AnimatedBackground;