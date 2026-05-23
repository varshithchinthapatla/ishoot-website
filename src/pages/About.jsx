import { motion } from "framer-motion";
import founderImg from "../assets/images/about/founder.png";
import mdImg from "../assets/images/about/md.png";
import { Sparkles, Camera, Video, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white pt-40 pb-24 px-6">

      {/* Background Glow */}
      <div className="absolute top-[-250px] left-[-200px] w-[700px] h-[700px] bg-red-600/30 rounded-full blur-[180px]" />

      <div className="absolute bottom-[-250px] right-[-200px] w-[700px] h-[700px] bg-red-500/20 rounded-full blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-5 font-semibold">
            About i_shoots_media
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">

            Capturing Stories.

            <br />

            <span className="bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent">
              Creating Emotions.
            </span>

          </h1>

          <p className="mt-8 text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We create cinematic reels, viral edits and premium visual content
            that helps creators, brands and businesses build a powerful
            digital presence.
          </p>

        </motion.div>

        {/* FOUNDER + MD */}
        <div className="grid md:grid-cols-2 gap-10 mt-24">

          {/* Founder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[35px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl group"
          >

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-red-500/10 to-transparent" />

            <div className="relative h-[500px] overflow-hidden">

              <img
                src={founderImg}
                alt="Founder"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            </div>

            <div className="relative z-10 p-8">

              <p className="text-red-500 font-semibold uppercase tracking-[0.2em] text-sm">
                Founder & Creative Director
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Kuppala Vamsi Tejanaidu
              </h2>

              <p className="mt-6 text-zinc-400 leading-relaxed text-lg">
                Started with a vision to create cinematic content that feels
                modern, emotional and viral.

                <br />
                <br />

                From shooting mobile reels for local creators to building
                impactful visual stories for brands and businesses, the journey
                of i_shoots_media has always been driven by creativity,
                consistency and storytelling.
              </p>

            </div>
          </motion.div>

          {/* MD */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-[35px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl group"
          >

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-red-500/10 to-transparent" />

            <div className="relative h-[500px] overflow-hidden">

              <img
                src={mdImg}
                alt="MD"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            </div>

            <div className="relative z-10 p-8">

              <p className="text-red-500 font-semibold uppercase tracking-[0.2em] text-sm">
                Managing Director
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Srimanthula Balasuryanaidu
              </h2>

              <p className="mt-6 text-zinc-400 leading-relaxed text-lg">
                Focused on building strong client relationships and delivering
                premium visual experiences.

                <br />
                <br />

                From planning shoots to managing executions, every project is
                handled with precision, creativity and attention to detail to
                ensure brands stand out in the digital world.
              </p>

            </div>
          </motion.div>

        </div>

        {/* HOW IT STARTED */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-28 rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 md:p-16"
        >

          <div className="flex items-center gap-3 mb-8">

            <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <Sparkles className="text-red-500" />
            </div>

            <h2 className="text-4xl font-black">
              How It Started
            </h2>

          </div>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-5xl">
            What started with a simple passion for creating reels soon became
            a growing creative media brand.

            <br />
            <br />

            With just a phone camera, ideas and consistency,
            i_shoots_media began creating short-form content for creators,
            cafés, businesses and events.

            <br />
            <br />

            Today, the brand continues to evolve by creating cinematic visuals,
            viral edits and premium social media content that helps businesses
            build their online presence.
          </p>

        </motion.div>

        {/* VISION */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <Camera className="text-red-500 mb-6" size={40} />

            <h3 className="text-2xl font-black mb-4">
              Cinematic Quality
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Every frame is designed with a cinematic feel that elevates
              your content beyond ordinary social media visuals.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <Video className="text-red-500 mb-6" size={40} />

            <h3 className="text-2xl font-black mb-4">
              Viral Storytelling
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              We focus on creating edits and reels that grab attention,
              create emotion and increase audience engagement.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <Heart className="text-red-500 mb-6" size={40} />

            <h3 className="text-2xl font-black mb-4">
              Passion Driven
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Creativity, consistency and passion are at the core of every
              project we shoot, edit and deliver.
            </p>
          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">
            <h2 className="text-5xl font-black text-red-500">
              500+
            </h2>

            <p className="mt-3 text-zinc-400">
              Reels Created
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">
            <h2 className="text-5xl font-black text-red-500">
              50M+
            </h2>

            <p className="mt-3 text-zinc-400">
              Views Generated
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">
            <h2 className="text-5xl font-black text-red-500">
              100+
            </h2>

            <p className="mt-3 text-zinc-400">
              Happy Clients
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">
            <h2 className="text-5xl font-black text-red-500">
              10 Min
            </h2>

            <p className="mt-3 text-zinc-400">
              Fast Delivery
            </p>
          </div>

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-28"
        >

          <h2 className="text-5xl md:text-6xl font-black leading-tight">

            Ready To Make

            <span className="block bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
              Your Brand Go Viral?
            </span>

          </h2>

          <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
            Let’s create cinematic visuals and impactful reels
            that people remember.
          </p>

          <a
            href="https://www.instagram.com/i_shoots_media?igsh=MTZ3dzF6b3lnMjk4aw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 text-lg font-semibold hover:scale-105 transition-all duration-500 hover:shadow-[0_0_60px_rgba(239,68,68,0.45)]"
          >

            Book a Shoot

          </a>

        </motion.div>

      </div>
    </div>
  );
}