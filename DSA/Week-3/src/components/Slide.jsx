import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import './Slide.css';

const Slide = ({ slide, direction }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current && slide.type === 'code') {
      Prism.highlightElement(codeRef.current);
    }
  }, [slide]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  if (slide.type === 'title') {
    return (
      <motion.div
        className="slide slide-title"
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        }}
      >
        <motion.div 
          className="title-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {slide.title}
          </motion.h1>
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {slide.subtitle}
          </motion.h2>
          <motion.p
            className="description"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {slide.description}
          </motion.p>
        </motion.div>
      </motion.div>
    );
  }

  if (slide.type === 'content') {
    return (
      <motion.div
        className="slide slide-content"
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        }}
      >
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {slide.title}
        </motion.h2>
        <motion.ul className="content-points">
          {slide.points.map((point, index) => (
            <motion.li
              key={index}
              custom={index}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              {point}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    );
  }

  if (slide.type === 'code') {
    return (
      <motion.div
        className="slide slide-code"
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        }}
      >
        <motion.div
          className="code-header"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2>{slide.title}</h2>
          {slide.description && (
            <p className="code-description">{slide.description}</p>
          )}
        </motion.div>
        <motion.div
          className="code-container"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <pre className="code-block">
            <code ref={codeRef} className="language-javascript">
              {slide.code}
            </code>
          </pre>
        </motion.div>
      </motion.div>
    );
  }

  return null;
};

export default Slide;
