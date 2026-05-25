import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

function BookingSuccess({ isOpen }) {
  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-xl"
        >

          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-[90%] max-w-md rounded-[35px] border border-green-500/20 bg-[#111] p-10 text-center shadow-[0_0_80px_rgba(34,197,94,0.2)]"
          >

            <div className="flex justify-center">

              <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center">

                <CheckCircle
                  size={60}
                  className="text-green-500"
                />

              </div>

            </div>

            <h2 className="mt-8 text-4xl font-black text-white">
              Booking Sent
            </h2>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Your booking request has been sent successfully.
              We will contact you shortly.
            </p>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default BookingSuccess;