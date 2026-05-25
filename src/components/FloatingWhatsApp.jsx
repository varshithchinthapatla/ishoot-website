import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919550905224",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-[999] w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:scale-110 transition-all duration-300"
    >
      <MessageCircle size={32} className="text-white" />
    </button>
  );
};

export default FloatingWhatsApp;