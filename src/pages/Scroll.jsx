import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Scroll({ children, stagger = 0.2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: stagger } }
  };

  return (
    <motion.div
      ref={ref}
      className="products"
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}         
    </motion.div>
  );
}

