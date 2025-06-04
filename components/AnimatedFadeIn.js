import { motion } from "framer-motion";

export default function AnimatedFadeIn({ children, delay = 0, duration = 0.5, y = 24 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
