import { Phone, MessageCircle } from 'lucide-react';
import siteConfig from '../../data/siteConfig';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 bg-green-600 text-white rounded-full shadow-lg shadow-green-600/30 hover:bg-green-500 transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
      <a
        href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
        className="p-3.5 bg-accent-500 text-white rounded-full shadow-lg shadow-accent-500/30 hover:bg-accent-600 transition-all hover:scale-110"
        aria-label="Call now"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}
