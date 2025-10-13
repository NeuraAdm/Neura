import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'cta';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'right',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'text-white bg-neura-primary hover:bg-neura-dark focus:ring-neura-light shadow-neura hover:shadow-neura-lg',
    secondary: 'text-neura-primary bg-transparent border-2 border-neura-primary hover:bg-neura-primary hover:text-white focus:ring-neura-light',
    cta: 'text-white bg-gradient-to-r from-neura-primary via-neura-secondary to-neura-accent hover:from-neura-dark hover:via-neura-primary hover:to-neura-secondary focus:ring-neura-light shadow-neura-lg hover:shadow-neura-xl',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const iconVariants = {
    hover: {
      x: iconPosition === 'right' ? 5 : -5,
      transition: { duration: 0.2 }
    }
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <motion.span 
          variants={iconVariants}
          className="mr-2"
        >
          {icon}
        </motion.span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <motion.span 
          variants={iconVariants}
          className="ml-2"
        >
          {icon}
        </motion.span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {content}
    </motion.button>
  );
};

export default AnimatedButton;