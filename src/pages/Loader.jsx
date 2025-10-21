import React, { useState } from "react";
import { motion } from "framer-motion";

const Loader = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const blocks = Array.from({ length: 8 });

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 grid grid-rows-8">
      {blocks.map((_, i) => (
        <motion.div
          key={i}
          className="bg-black"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{
            duration: 0.3,         
            delay: i * 0.1,        
            ease: "easeInOut",
          }}
          onAnimationComplete={() => {
            if (i === blocks.length - 1) {
              setVisible(false);
              onFinish();
            }
          }}
        />
      ))}
    </div>
  );
};

export default Loader;
