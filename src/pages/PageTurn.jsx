// PageTurn.jsx  (re-usable wrapper)
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const variants = {
  initial: { opacity: 0, rotateY: -90, transformOrigin: 'left center' },
  animate: { opacity: 1, rotateY: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  exit:     { opacity: 0, rotateY: 90,  transformOrigin: 'right center', transition: { duration: 0.5 } }
};

export default function PageTurn({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}