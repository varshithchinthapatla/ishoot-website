import CircularGallery from "../components/CircularGallery";

import cafeReel from "../assets/videos/cafe-reel.mp4";
import pawanReel from "../assets/videos/pawan-kalyan-reel.mp4";
import pistaReel from "../assets/videos/pista-house-reel.mp4";
import politicalReel from "../assets/videos/political-reel.mp4";
import weddingReel from "../assets/videos/wedding-reel.mp4";
import ssthamanReel from "../assets/videos/ssthaman-reel.mp4";
import onemoreReel from "../assets/videos/onemore-reel.mp4";

const galleryItems = [
  {
    title: "Cinematic Reels",
    description: "Luxury cinematic edits for brands and creators.",
    video: cafeReel,
  },
  {
    title: "Viral Instagram Edits",
    description: "Fast paced edits with trending transitions.",
    video: pawanReel,
  },
  {
    title: "Product Commercials",
    description: "Professional product showcase edits.",
    video: pistaReel,
  },
  {
    title: "Lifestyle Shoots",
    description: "Premium storytelling visuals and reels.",
    video: politicalReel,
  },
  {
    title: "Travel Reels",
    description: "Smooth cinematic travel experiences.",
    video: weddingReel,
  },
  {
    title: "Event Highlights",
    description: "Energetic edits for parties and events.",
    video: ssthamanReel,
  },
  {
    title: "Additional Reels",
    description: "More cinematic edits for various occasions.",
    video: onemoreReel,
  }
];


function Portfolio() {
  return (
    <div className="bg-gradient-to-br from-black via-[#140000] to-[#2b0000] text-[#F5F1E8] min-h-screen pt-40">

      <CircularGallery
        items={galleryItems}
        radius={400}
        autoRotateSpeed={0.03}
      />
      <div className="flex justify-center mt-10 mb-10">

  <a
    href="https://www.instagram.com/i_shoots_media?igsh=MTZ3dzF6b3lnMjk4aw=="
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden px-10 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-800 text-lg font-semibold transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,0,0,0.35)]"
  >

    <span className="relative z-10">
      View More Reels
    </span>

    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

  </a>

</div>

      {/* CONTENT SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#F5F1E8]">
            Content That Feels
            <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}Cinematic
            </span>
          </h2>

          <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We create premium mobile cinematography for brands,
            influencers, cafes, events, weddings and businesses.
          </p>
        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="p-8 rounded-3xl border border-red-500/20 bg-white/[0.03] backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-4">
              Cinematic Reels
            </h3>

            <p className="text-zinc-400">
              Smooth transitions, color grading and storytelling edits.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-red-500/20 bg-white/[0.03] backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-4">
              Instagram Content
            </h3>

            <p className="text-zinc-400">
              Trending edits optimized for Instagram reach and engagement.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-red-500/20 bg-white/[0.03] backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-4">
              Event Highlights
            </h3>

            <p className="text-zinc-400">
              Weddings, events and brand launches captured cinematically.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Portfolio;