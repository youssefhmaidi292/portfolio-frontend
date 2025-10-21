import React, { useState } from "react";
import { motion } from "framer-motion";

const PageTransition = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const blocks = Array.from({ length: 8 });

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {blocks.map((_, i) => (
        <motion.div
          key={i}
          className="bg-black fixed left-0 w-full"
          style={{ height: `${100 / blocks.length}%`, top: `${i * (100 / blocks.length)}%` }}
          initial={{ scaleY: 0, transformOrigin: 'top' }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 0.3,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
          onAnimationComplete={() => {
            if (i === blocks.length - 1) {
              setTimeout(() => {
                setVisible(false);
                onFinish();
              }, 300); 
            }
          }}
        />
      ))}
    </div>
  );
};

export default PageTransition;