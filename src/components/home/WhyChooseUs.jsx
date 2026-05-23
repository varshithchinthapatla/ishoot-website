import { motion } from "framer-motion";
import {
  Zap,
  Camera,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Delivery",
    desc: "Quick turnaround optimized for modern creators.",
  },
  {
    icon: Camera,
    title: "Cinematic Quality",
    desc: "Premium visuals with high-end editing style.",
  },
  {
    icon: TrendingUp,
    title: "Viral Strategy",
    desc: "Content built for engagement and reach.",
  },
  {
    icon: Sparkles,
    title: "Creative Direction",
    desc: "Every reel crafted with unique storytelling.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">

      <div className="absolute right-[-150px] top-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-5 font-semibold">
            Why Us
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            Why Brands Choose
            <span className="block bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
              i_shoots_media
            </span>
          </h2>

        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
              >

                <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">

                  <Icon className="text-red-500" size={28} />

                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}