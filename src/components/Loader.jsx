import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[400px] h-[400px] bg-red-600/20 blur-[150px] rounded-full" />

      {/* Logo Animation */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="text-5xl md:text-7xl font-black tracking-[0.2em] text-white"
      >
        <span className="text-red-500">I</span>SHOOTS
      </motion.h1>

    </div>
  );
}

export default Loader;