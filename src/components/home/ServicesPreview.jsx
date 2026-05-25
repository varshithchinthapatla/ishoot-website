import { motion } from "framer-motion";

const services = [
  "Reel Editing",
  "Brand Shoots",
  "Product Ads",
  "Event Coverage",
];

export default function ServicesPreview() {
  return (
    <section className="py-32 px-6 bg-black">

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-7xl font-black">

            Premium
            <span className="block bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
              Media Services
            </span>

          </h2>

        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.04,
                y: -5,
              }}
              className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 md:p-10 text-center md:backdrop-blur-xl backdrop-blur-sm"
            >

              <h3 className="text-2xl font-bold">
                {item}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}