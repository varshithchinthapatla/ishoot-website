import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">

      <div className="absolute w-[700px] h-[700px] bg-red-600/20 rounded-full blur-[200px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        <h2 className="text-5xl md:text-8xl font-black leading-tight">

          Ready To Make
          <span className="block bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
            Your Brand Viral?
          </span>

        </h2>

        <p className="mt-8 text-zinc-400 text-lg max-w-2xl mx-auto">
          Let’s create cinematic content that captures attention and drives engagement.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-12">

          <Link
            to="/contact"
            className="px-10 py-5 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 text-lg font-semibold hover:scale-105 transition-all duration-500 hover:shadow-[0_0_60px_rgba(239,68,68,0.5)]"
          >
            Book a Shoot
          </Link>

          <a
            href="https://www.instagram.com/i_shoots_media?igsh=MTZ3dzF6b3lnMjk4aw=="
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-red-500/40 transition-all duration-500"
          >
            DM on Instagram
          </a>

        </div>

      </div>
    </section>
  );
}