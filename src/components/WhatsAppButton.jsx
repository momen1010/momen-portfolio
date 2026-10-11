import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../data/siteConfig";

export default function WhatsAppButton() {
  if (!siteConfig.whatsapp) return null;

  const defaultMessage = "Hi Mo'men! I saw your portfolio and I'd like to talk.";
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact me on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] transition-colors shadow-lg shadow-[#25D366]/30">
        <FaWhatsapp size={26} className="text-white" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-bg-elevated border border-border-muted text-text-primary font-mono text-xs tracking-widest uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
          Chat on WhatsApp
        </span>
      </span>
    </a>
  );
}