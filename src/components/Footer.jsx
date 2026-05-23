import { Camera, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">

      {/* Glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-red-600/20 rounded-full blur-[140px]" />

      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-red-500/20 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <h1 className="text-3xl font-black bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent">
              i_shoots_media
            </h1>

            <p className="mt-5 text-zinc-400 leading-relaxed">
              Creating cinematic reels, viral edits and premium visual stories
              for creators, brands and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-5">
              Quick Links
            </h2>

            <div className="space-y-3 text-zinc-400">

              <a href="/" className="block hover:text-red-500 transition">
                Home
              </a>

              <a href="/portfolio" className="block hover:text-red-500 transition">
                Portfolio
              </a>

              <a href="/services" className="block hover:text-red-500 transition">
                Services
              </a>

              <a href="/about" className="block hover:text-red-500 transition">
                About
              </a>

              <a href="/contact" className="block hover:text-red-500 transition">
                Contact
              </a>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold mb-5">
              Contact
            </h2>

            <div className="space-y-4 text-zinc-400">

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-red-500" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-red-500" />
                <span>ishootsmedia@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-red-500" />
                <span>Hyderabad, India</span>
              </div>

            </div>
          </div>

          {/* Instagram */}
          <div>
            <h2 className="text-xl font-bold mb-5">
              Follow Us
            </h2>

            <a
              href="https://www.instagram.com/i_shoots_media?igsh=MTZ3dzF6b3lnMjk4aw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-red-500/40 hover:bg-red-500/10 transition-all duration-500"
            >

              <Camera className="text-red-500" />

              <img
  src="/logo.png"
  alt="i_shoots_media"
  className="h-16 object-contain"
/>

            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-zinc-500 text-sm">
            © 2026 i_shoots_media. All rights reserved.
          </p>

          <p className="text-zinc-500 text-sm">
            Designed with cinematic creativity.
          </p>

        </div>

      </div>
    </footer>
  );
}