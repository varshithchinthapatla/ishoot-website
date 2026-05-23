import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Camera,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white pt-40 pb-24 px-6">

      {/* Background Glow */}
      <div className="absolute top-[-250px] left-[-200px] w-[700px] h-[700px] bg-red-600/30 rounded-full blur-[180px]" />

      <div className="absolute bottom-[-250px] right-[-200px] w-[700px] h-[700px] bg-red-500/20 rounded-full blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-5 font-semibold">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">

            Let’s Create

            <span className="block bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent">
              Viral Content
            </span>

          </h1>

          <p className="mt-8 text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Have a project, reel idea or brand collaboration in mind?
            Let’s connect and create something cinematic together.
          </p>

        </motion.div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-10 mt-24">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            {/* Card */}
            <div className="rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <Phone className="text-red-500" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    Call Us
                  </h3>

                  <p className="text-zinc-400 mt-1">
                    +91 98765 43210
                  </p>
                </div>

              </div>

            </div>

            {/* Card */}
            <div className="rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <Mail className="text-red-500" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    Email
                  </h3>

                  <p className="text-zinc-400 mt-1">
                    ishootsmedia@gmail.com
                  </p>
                </div>

              </div>

            </div>

            {/* Card */}
            <div className="rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <Camera className="text-red-500" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    Instagram
                  </h3>

                  <a
                    href="https://www.instagram.com/i_shoots_media?igsh=MTZ3dzF6b3lnMjk4aw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 mt-1 hover:text-red-500 transition"
                  >
                    @i_shoots_media
                  </a>
                </div>

              </div>

            </div>

            {/* Card */}
            <div className="rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <MapPin className="text-red-500" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    Location
                  </h3>

                  <p className="text-zinc-400 mt-1">
                    Hyderabad, India
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10"
          >

            <h2 className="text-4xl font-black mb-8">
              Send Message
            </h2>

            <form className="space-y-6">

              {/* Name */}
              <div>
                <label className="block mb-3 text-zinc-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 outline-none focus:border-red-500 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-3 text-zinc-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 outline-none focus:border-red-500 transition-all"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-3 text-zinc-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Project / Shoot Type"
                  className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 outline-none focus:border-red-500 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-3 text-zinc-300">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Tell us about your project..."
                  className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 outline-none focus:border-red-500 transition-all resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group w-full py-5 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 text-lg font-semibold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_60px_rgba(239,68,68,0.45)]"
              >

                Send Message

                <Send size={20} />

              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </div>
  );
}