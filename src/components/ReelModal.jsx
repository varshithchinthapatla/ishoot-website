import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ReelModal = ({ isOpen, onClose, video }) => {
  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/90 md:backdrop-blur-xl backdrop-blur-sm flex items-center justify-center p-6"
        >

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-red-500 transition-all duration-300"
          >
            <X className="text-white" />
          </button>

          {/* Video */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-[420px] rounded-[30px] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(255,0,0,0.2)]"
          >

            <video
              src={video}
              controls
              autoPlay
              className="w-full h-[80vh] object-cover"
            />

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
};

export default ReelModal;