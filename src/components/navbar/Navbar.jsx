import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Home,
  Camera,
  Video,
  Sparkles,
  Phone,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Portfolio", icon: Camera, path: "/portfolio" },
  { label: "Services", icon: Video, path: "/services" },
  { label: "About", icon: Sparkles, path: "/about" },
  { label: "Contact", icon: Phone, path: "/contact" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const location = useLocation();

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full px-4">

      {/* Desktop Navbar */}
      <motion.nav
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 26,
        }}
        className="hidden md:flex mx-auto w-fit bg-gradient-to-br from-black via-[#140000] to-[#2b0000]/80 border border-red-500/20 rounded-full items-center p-2 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,255,255,0.05)]"
      >

        {/* Logo */}
        <div className="px-3 pr-5 flex items-center">
  <img
    src="/logo.png"
    alt="i_shoots_media"
    className="h-16 md:h-20 object-contain"
  />
</div>

        {/* Nav Items */}
        {navItems.map((item) => {
          const Icon = item.icon;

          const isActive = location.pathname === item.path;

          return (
            <Link key={item.label} to={item.path}>

              <motion.button
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? "bg-white/10 text-[#F5F1E8]"
                    : "text-zinc-400 hover:text-[#F5F1E8] hover:bg-white/[0.03]"
                }`}
              >

                {/* Glow */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-glow"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C6A972]/10 to-[#E5D0A2]/10"
                  />
                )}

                <div className="relative z-10 flex items-center gap-2">
                  <Icon size={20} />
                  <span>{item.label}</span>
                </div>

              </motion.button>

            </Link>
          );
        })}
      </motion.nav>

      {/* Mobile Navbar */}
      <div className="md:hidden">

        {/* Top Bar */}
        <div className="flex items-center justify-between bg-black/40 border border-red-500/20 rounded-full px-4 py-2.5 backdrop-blur-2xl h-[72px]">

          <img
  src="/logo.png"
  alt="i_shoots_media"
  className="w-44 md:w-56 object-contain"
/>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-[#F5F1E8]"
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 bg-gradient-to-br from-black via-[#140000] to-[#2b0000]/70 border border-red-500/20 rounded-3xl p-3 backdrop-blur-2xl"
          >

            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
                >

                  <div className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-zinc-300 hover:bg-white/[0.03] hover:text-[#F5F1E8] transition-all duration-300">

                    <Icon size={18} />

                    <span>
                      {item.label}
                    </span>

                  </div>

                </Link>
              );
            })}

          </motion.div>
        )}
      </div>
    </div>
  );
}