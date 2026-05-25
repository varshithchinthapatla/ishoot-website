import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[400px] h-[400px] bg-red-600/20 blur-[150px] rounded-full" />

      {/* Logo Animation */}
      <motion.h1
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="relative text-5xl md:text-7xl font-black tracking-[0.2em]"
>

  {/* Base Red Text */}
  I_SH<span className="text-red-500">OO</span>TS

  {/* Shine Layer */}
  <span className="absolute inset-0 overflow-hidden">

    <span
      className="
        absolute inset-0
        text-transparent
        bg-clip-text
        bg-gradient-to-r
        from-transparent
        via-white
        to-transparent
        bg-[length:200%_100%]
        animate-shine
      "
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      I_SHOOTS
    </span>

  </span>

</motion.h1>

    </div>
  );
}

export default Loader;