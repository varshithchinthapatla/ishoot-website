import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import reel1 from "../../assets/videos/political-reel.mp4";
import reel2 from "../../assets/videos/onemore-reel.mp4";
import reel3 from "../../assets/videos/pawan-kalyan-reel.mp4";

const reels = [reel1, reel2, reel3];

export default function FeaturedReels() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">

      <div className="absolute top-0 left-[-150px] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-5 font-semibold">
            Featured Reels
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">

            Cinematic Content

            <span className="block bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
              That Grabs Attention
            </span>

          </h2>

        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {reels.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.03] md:backdrop-blur-xl backdrop-blur-sm"
            >

              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[650px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">

                <h3 className="text-3xl font-bold">
                  Featured Reels
                </h3>

                <p className="text-zinc-300 mt-3">
                  High retention cinematic reels optimized for social media growth.
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        <div className="text-center mt-16">

          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 text-lg font-semibold hover:scale-105 transition-all duration-500 hover:shadow-[0_0_60px_rgba(239,68,68,0.5)]"
          >
            Explore Portfolio
          </Link>

        </div>

      </div>
    </section>
  );
}