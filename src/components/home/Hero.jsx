import { motion } from "framer-motion";
import heroPhone from "../../assets/images/hero-phone.png";

export default function Hero() {
  return (
    <section
  id="home"
  className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-[#140000] to-[#2b0000] text-white"
>

      {/* Background Glow */}
      <div className="absolute top-[-250px] left-[-150px] w-[700px] h-[700px] bg-red-600/30 rounded-full blur-[180px]" />

      <div className="absolute bottom-[-250px] right-[-150px] w-[700px] h-[700px] bg-red-500/25 rounded-full blur-[180px]" />
      <img
  src="/logo.png"
  alt="logo"
 className="absolute top-24 right-10 w-52 opacity-15 animate-pulse hidden lg:block"
/>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-36 lg:pt-44 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-pink-500/20 bg-white/[0.03] backdrop-blur-md mb-8">

            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>

            <span className="text-sm text-zinc-300">
              Instant Reel Delivery
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">

            Shoot Today.

            <br />

            <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-700 bg-clip-text text-transparent">
              Go Viral
            </span>

            <br />

            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Tonight.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Professional iPhone reels shot, edited and delivered within just 10 minutes for creators, influencers, cafés, gyms, brands and businesses.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

           <button className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-800 text-lg font-semibold transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,0,0,0.35)]">

  <span className="relative z-10">
    Book a Shoot
  </span>

  {/* Shine Effect */}
  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

</button>

            <button className="group relative overflow-hidden px-8 py-4 rounded-2xl border border-red-500/20 bg-white/[0.03] backdrop-blur-md text-lg font-semibold transition-all duration-500 hover:bg-white/10 hover:border-[#C6A972]/40 hover:scale-105">

  <span className="relative z-10">
    Watch Reels
  </span>

  {/* Glow Hover */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#C6A972]/10 to-[#E5D0A2]/10"></div>

</button>

          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#C6A972]">
                500+
              </h2>

              <p className="mt-2 text-zinc-400">
                Reels Created
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#E5D0A2]">
                50M+
              </h2>

              <p className="mt-2 text-zinc-400">
                Views Generated
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#D9C29C]">
                100+
              </h2>

              <p className="mt-2 text-zinc-400">
                Happy Clients
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-orange-400">
                10 Min
              </h2>

              <p className="mt-2 text-zinc-400">
                Delivery
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 1.2,
    ease: "easeOut",
  }}
  className="flex-1 relative flex items-center justify-center"
>

          {/* Glow Behind Image */}
          <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-pink-500/30 to-cyan-500/30 blur-[120px] rounded-full"></div>

          {/* Main Image */}
          <motion.img
  src={heroPhone}
  alt="i_shoots_media"
  className="relative z-10 w-full max-w-[650px] object-contain drop-shadow-[0_0_50px_rgba(255,0,128,0.35)]"
  animate={{
    y: [0, -8, 0],
    rotate: [0, 1.5, 0, -1.5, 0],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

        </motion.div>

      </div>
    </section>
  );
}