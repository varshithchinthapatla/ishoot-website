export default function InstagramCTA() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent blur-[160px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-16">

        <h2 className="text-5xl md:text-7xl font-black leading-tight">

          Follow Our

          <span className="block bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
            Viral Journey
          </span>

        </h2>

        <p className="mt-8 text-zinc-400 text-lg max-w-2xl mx-auto">
          Explore cinematic reels, trending edits and premium content crafted for modern brands.
        </p>

        <a
          href="https://www.instagram.com/i_shoots_media?igsh=MTZ3dzF6b3lnMjk4aw=="
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex mt-12 px-10 py-5 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 text-lg font-semibold hover:scale-105 transition-all duration-500 hover:shadow-[0_0_60px_rgba(239,68,68,0.5)]"
        >
          Follow on Instagram
        </a>

      </div>
    </section>
  );
}