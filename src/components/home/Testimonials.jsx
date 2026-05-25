import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Café Owner",
    text: "Our engagement doubled after working with i_shoots_media.",
  },
  {
    name: "Fitness Creator",
    text: "The editing style feels cinematic and premium.",
  },
  {
    name: "Fashion Brand",
    text: "Fastest reel delivery with insane quality.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">

      <div className="absolute left-[-150px] bottom-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[180px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-5 font-semibold">
            Testimonials
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            Loved By
            <span className="block bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
              Creators & Brands
            </span>
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
              }}
              className="rounded-[35px] border border-white/10 bg-white/[0.03] p-10 md:backdrop-blur-xl backdrop-blur-sm"
            >

              <p className="text-zinc-300 text-lg leading-relaxed">
                “{item.text}”
              </p>

              <div className="mt-8">

                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}