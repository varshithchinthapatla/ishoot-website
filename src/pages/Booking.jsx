import { motion } from "framer-motion";
import { CalendarDays, Camera, Clock3, Sparkles } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BookingSuccess from "../components/BookingSuccess";

function Booking() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showSuccess, setShowSuccess] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  phone: "",
  package: "",
  location: "",
  message: "",
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const selectPackage = (pkg) => {
  setFormData({
    ...formData,
    package: pkg,
  });

  document
    .getElementById("booking-form")
    ?.scrollIntoView({ behavior: "smooth" });
};
const handleBooking = () => {

  const text = `
🎬 NEW BOOKING REQUEST

👤 Name: ${formData.name}

📞 Phone: ${formData.phone}

📦 Package: ${formData.package}

📅 Date: ${selectedDate.toDateString()}

📍 Location: ${formData.location}

📝 Message:
${formData.message}
`;

  const whatsappUrl = `https://wa.me/919550905224?text=${encodeURIComponent(text)}`;
  setShowSuccess(true);

setTimeout(() => {
  setShowSuccess(false);
}, 10000);

  window.open(whatsappUrl, "_blank");
};
  const packages = [
    {
      title: "Starter Shoot",
      price: "₹4,999",
      desc: "Perfect for creators & personal reels.",
    },
    {
      title: "Brand Cinematic",
      price: "₹14,999",
      desc: "Professional reels for businesses & brands.",
    },
    {
      title: "Wedding Stories",
      price: "₹49,999",
      desc: "Luxury cinematic wedding coverage.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[140px]" />

      <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-red-700/20 rounded-full blur-[140px]" />

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 mb-8">
            <Sparkles size={18} />
            Book Your Shoot
          </div>

          <h1 className="text-4xl sm:text-7xl font-black leading-tight">
            Let’s Create
            <span className="block text-red-500">
              Cinematic Content
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-8 text-zinc-400 text-lg leading-relaxed">
            Premium reels, cinematic storytelling and luxury production
            tailored for creators, brands and unforgettable events.
          </p>

        </motion.div>

        {/* Packages */}
        {/* Pricing Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

  {/* Starter */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative rounded-[35px] border border-red-500/20 bg-black/70 backdrop-blur-xl overflow-hidden p-10 group"
  >

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-red-500/10 to-transparent" />

    <div className="relative z-10">

      <div className="w-16 h-16 rounded-2xl border border-red-500/20 flex items-center justify-center bg-red-500/5">
        <Sparkles className="text-red-500" size={28} />
      </div>

      <h2 className="mt-10 text-5xl font-black">
        Starter
      </h2>

      <h3 className="mt-6 text-6xl font-black text-red-500">
        ₹1,999
      </h3>

      <p className="mt-6 text-zinc-400 text-lg">
        1 Reel (up to 60 seconds)
      </p>

      <div className="mt-10 space-y-5 text-zinc-300">

        <div>✔ Personal Reel Shoot</div>
        <div>✔ Quick Delivery</div>
        <div>✔ Instagram Optimized</div>

      </div>

      <button
  onClick={() => selectPackage("Starter")}
  className="w-full mt-12 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 font-semibold text-lg hover:scale-[1.03] transition-all duration-300"
>
  Choose Plan
</button>

    </div>
    
  </motion.div>
  

  {/* Standard */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="relative rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden p-10 group"
  >

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-red-500/10 to-transparent" />

    <div className="relative z-10">

      <div className="w-16 h-16 rounded-2xl border border-red-500/20 flex items-center justify-center bg-red-500/5">
        <Camera className="text-red-500" size={28} />
      </div>

      <h2 className="mt-10 text-5xl font-black">
        Standard
      </h2>

      <h3 className="mt-6 text-6xl font-black text-red-500">
        ₹5,499
      </h3>

      <p className="mt-6 text-zinc-400 text-lg">
        3 Reels (up to 60 seconds)
      </p>

      <div className="mt-10 space-y-5 text-zinc-300">

        <div>✔ Brand Promotion</div>
        <div>✔ Weekly Content</div>
        <div>✔ Cinematic Edit</div>

      </div>

      <button
  onClick={() => selectPackage("Standard")}
  className="w-full mt-12 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 font-semibold text-lg hover:scale-[1.03] transition-all duration-300"
>
  Choose Plan
</button>

    </div>
  </motion.div>

  {/* Pro */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="relative rounded-[35px] border border-red-500/30 bg-red-950/20 backdrop-blur-xl overflow-hidden p-10 group"
  >

    <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
      TOP PICK
    </div>

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-red-500/10 to-transparent" />

    <div className="relative z-10">

      <div className="w-16 h-16 rounded-2xl border border-red-500/20 flex items-center justify-center bg-red-500/5">
        <Clock3 className="text-red-500" size={28} />
      </div>

      <h2 className="mt-10 text-5xl font-black">
        Pro
      </h2>

      <h3 className="mt-6 text-6xl font-black text-red-500">
        ₹9,999
      </h3>

      <p className="mt-6 text-zinc-400 text-lg">
        6 Reels + Strategy
      </p>

      <div className="mt-10 space-y-5 text-zinc-300">

        <div>✔ Long-term Growth</div>
        <div>✔ Monthly Content</div>
        <div>✔ Viral Style Editing</div>

      </div>

      <button
  onClick={() => selectPackage("Pro")}
  className="w-full mt-12 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 font-semibold text-lg hover:scale-[1.03] transition-all duration-300 shadow-[0_0_40px_rgba(255,0,0,0.3)]"
>
  Choose Plan
</button>

    </div>
  </motion.div>

  {/* Premium */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="relative rounded-[35px] border border-white/10 bg-black/80 backdrop-blur-xl overflow-hidden p-10 group"
  >

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-red-500/10 to-transparent" />

    <div className="relative z-10">

      <div className="w-16 h-16 rounded-2xl border border-red-500/20 flex items-center justify-center bg-red-500/5">
        <Sparkles className="text-red-500" size={28} />
      </div>

      <h2 className="mt-10 text-5xl font-black">
        Premium
      </h2>

      <h3 className="mt-6 text-5xl font-black text-red-500 leading-tight">
        Custom Pricing
      </h3>

      <p className="mt-6 text-zinc-400 text-lg">
        Weddings & Luxury Events
      </p>

      <div className="mt-10 space-y-5 text-zinc-300">

        <div>✔ Full Event Coverage</div>
        <div>✔ Cinematic Storytelling</div>
        <div>✔ Premium Production</div>

      </div>

      <button
  onClick={() => selectPackage("Premium")}
  className="w-full mt-12 py-4 rounded-2xl border border-red-500/30 bg-red-500/10 font-semibold text-lg hover:bg-red-500/20 transition-all duration-300"
>
  Contact Us
</button>

    </div>
  </motion.div>

</div>
<section
  id="booking-form"
  className="mt-32 max-w-5xl mx-auto"
>

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-16"
  >

    <h2 className="text-5xl md:text-6xl font-black text-center">
      Book Your Shoot
    </h2>

    <p className="text-zinc-400 text-center mt-6 text-lg">
      Fill the details and confirm your booking instantly.
    </p>

    <div className="grid md:grid-cols-2 gap-8 mt-16">

      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-red-500"
      />

      {/* Phone */}
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-red-500"
      />

      {/* Package */}
      <select
        name="package"
        value={formData.package}
        onChange={handleChange}
        className="bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-red-500"
      >
        <option value="">Select Package</option>
        <option>Starter</option>
        <option>Standard</option>
        <option>Pro</option>
        <option>Premium</option>
      </select>

      {/* Location */}
        <input
        type="text"
        name="location"
        placeholder="Shoot Location"
        value={formData.location}
        onChange={handleChange}
        className="bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-red-500"
            />

            {   /* Date Picker */}
        <div className="bg-black/40 border border-white/10 rounded-2xl px-6 py-5">

        <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="bg-transparent outline-none w-full"
        />

        </div>
    {/* Message */}
    <textarea
      rows="6"
      name="message"
      placeholder="Tell us about your shoot..."
      value={formData.message}
      onChange={handleChange}
      className="w-full mt-8 bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-red-500"
    />

    {/* Button */}
    <button
      onClick={handleBooking}
      className="w-full mt-10 py-5 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 text-lg md:text-lg md:text-lg md:text-lg md:text-lg md:text-lg md:text-lg md:text-lg md:text-lg md:text-lg md:text-lg md:text-lg md:text-xl font-bold hover:scale-[1.02] transition-all duration-300 shadow-[0_0_50px_rgba(255,0,0,0.25)]"
    >
      Continue on WhatsApp
        </button>
    </div>
    </motion.div>
    
    </section>


      </section>
      <BookingSuccess isOpen={showSuccess} />
    </div>
  );
}

export default Booking;