import { motion } from "framer-motion";
import {
  Crown,
  Sparkles,
  Check,
  Video,
  Camera,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: <Sparkles size={22} />,
    price: "₹1,999",
    reels: "1 Reel (up to 60 seconds)",
    bestFor: [
      "Trials",
      "Car & Bike Delivery",
      "Personal Reel Shoot",
    ],
    description:
      "Single reel creation for quick brand promotion & short happy moments.",
    highlight: false,
  },
  {
    name: "Standard",
    icon: <Camera size={22} />,
    price: "₹5,499",
    reels: "3 Reels (up to 60 seconds)",
    bestFor: [
      "Weekly Content Posting",
      "House Ceremony",
      "Birthday & Family Parties",
    ],
    description:
      "Perfect for creators or brands posting regularly.",
    highlight: false,
  },
  {
    name: "Pro",
    icon: <Video size={22} />,
    price: "₹9,999",
    reels: "6 Reels (up to 60 seconds)",
    bestFor: [
      "Long-term Growth",
      "Brand Building",
      "Monthly Social Media Strategy",
    ],
    description:
      "Designed for brands looking for continuous content and professional branding.",
    highlight: true,
  },
  {
    name: "Premium",
    icon: <Crown size={22} />,
    price: "Custom Pricing",
    reels: "Depends on Event",
    bestFor: [
      "Marriage Events",
      "Luxury Celebrations",
      "Full Event Coverage",
    ],
    description:
      "Premium cinematic coverage tailored for grand events.",
    highlight: false,
  },
];

export default function Services() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white pt-40 pb-24 px-6">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-red-600/30 rounded-full blur-[180px]" />

      <div className="absolute bottom-[-250px] right-[-200px] w-[700px] h-[700px] bg-red-500/20 rounded-full blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >

          <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
            Pricing Plans
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Offering
            <br />

            <span className="bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent">
              Packages
            </span>
          </h1>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg">
            Professional reels, cinematic edits and viral content creation
            packages for creators, brands, cafés, gyms and businesses.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`relative rounded-[35px] border overflow-hidden backdrop-blur-2xl p-8 group transition-all duration-500 hover:-translate-y-2 ${
                plan.highlight
                  ? "border-red-500/40 bg-gradient-to-b from-red-500/10 to-white/[0.03] shadow-[0_0_60px_rgba(239,68,68,0.35)]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-red-500/10 to-transparent" />

              {/* Top */}
              <div className="relative z-10 flex items-center justify-between">

                <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                  {plan.icon}
                </div>

                {plan.highlight && (
                  <div className="px-4 py-1 rounded-full bg-red-500 text-xs font-bold text-white">
                    TOP PICK
                  </div>
                )}
              </div>

              {/* Title */}
              <div className="relative z-10 mt-8">

                <h2 className="text-4xl font-black text-white">
                  {plan.name}
                </h2>

                <h3 className="mt-5 text-4xl font-black bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
                  {plan.price}
                </h3>

                <p className="mt-5 text-zinc-300 text-lg">
                  {plan.reels}
                </p>

              </div>

              {/* Features */}
              <div className="relative z-10 mt-10">

                <h4 className="text-red-500 text-xl font-bold mb-5">
                  Best For :
                </h4>

                <div className="space-y-4">

                  {plan.bestFor.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >

                      <div className="mt-1">
                        <Check
                          size={18}
                          className="text-red-500"
                        />
                      </div>

                      <p className="text-zinc-300 leading-relaxed">
                        {item}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

              {/* Description */}
              <div className="relative z-10 mt-10 pt-6 border-t border-white/10">

                <p className="text-zinc-400 leading-relaxed">
                  {plan.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-24 rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10"
        >

          <h2 className="text-3xl font-black mb-8">
            Important Notes
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-zinc-400">

            <div className="flex gap-3">
              <Check className="text-red-500 mt-1" size={18} />
              <p>
                Reel duration ranges between 30–60 seconds each.
              </p>
            </div>

            <div className="flex gap-3">
              <Check className="text-red-500 mt-1" size={18} />
              <p>
                Drone service depends on permissions & weather conditions.
              </p>
            </div>

            <div className="flex gap-3">
              <Check className="text-red-500 mt-1" size={18} />
              <p>
                Extra edits and revisions will be charged separately.
              </p>
            </div>

            <div className="flex gap-3">
              <Check className="text-red-500 mt-1" size={18} />
              <p>
                Booking is confirmed only after advance payment.
              </p>
            </div>

          </div>

        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24"
        >

          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Ready To Create
            <span className="block bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
              Viral Content?
            </span>
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg">
            Let’s create cinematic reels and high-quality content
            that makes your brand stand out.
          </p>

          <a
            href="https://www.instagram.com/i_shoots_media?igsh=MTZ3dzF6b3lnMjk4aw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 text-lg font-semibold hover:scale-105 transition-all duration-500 hover:shadow-[0_0_60px_rgba(239,68,68,0.45)]"
          >

            <span className="text-2xl">📸</span>

            Book Your Shoot

          </a>

        </motion.div>

      </div>
    </div>
  );
}